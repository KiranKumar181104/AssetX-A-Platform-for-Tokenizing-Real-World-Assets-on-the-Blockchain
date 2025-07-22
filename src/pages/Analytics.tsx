import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown,
  DollarSign,
  Users,
  Building,
  BarChart3,
  ArrowLeft,
  Calendar,
  Target,
  Activity
} from "lucide-react";
import { Link } from "react-router-dom";

const Analytics = () => {
  const performanceMetrics = [
    { 
      title: "Total ROI", 
      value: "24.8%", 
      change: "+4.2%", 
      trend: "up",
      icon: TrendingUp,
      period: "YTD"
    },
    { 
      title: "Portfolio Growth", 
      value: "$487K", 
      change: "+12.5%", 
      trend: "up",
      icon: DollarSign,
      period: "This Month"
    },
    { 
      title: "Active Investments", 
      value: "24", 
      change: "+3", 
      trend: "up",
      icon: Building,
      period: "Total"
    },
    { 
      title: "Avg. Yield", 
      value: "8.4%", 
      change: "-0.3%", 
      trend: "down",
      icon: Target,
      period: "Quarterly"
    },
  ];

  const assetPerformance = [
    {
      name: "Manhattan Office Building",
      type: "Real Estate",
      currentValue: "$1,200,000",
      invested: "$850,000",
      roi: "+41.2%",
      yield: "12.3%",
      status: "Performing",
    },
    {
      name: "Rare Picasso Painting",
      type: "Fine Art",
      currentValue: "$850,000",
      invested: "$750,000",
      roi: "+13.3%",
      yield: "6.7%",
      status: "Stable",
    },
    {
      name: "Gold Commodity Fund",
      type: "Commodities",
      currentValue: "$400,000",
      invested: "$420,000",
      roi: "-4.8%",
      yield: "4.1%",
      status: "Underperforming",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Performing": return "bg-success text-success-foreground";
      case "Stable": return "bg-warning text-warning-foreground";
      case "Underperforming": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
              <p className="text-muted-foreground">Detailed performance insights</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Last updated: Today</span>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {performanceMetrics.map((metric, index) => {
            const Icon = metric.icon;
            const isPositive = metric.trend === "up";
            return (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      isPositive ? "bg-success/10" : "bg-destructive/10"
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        isPositive ? "text-success" : "text-destructive"
                      }`} />
                    </div>
                    <span className="text-xs text-muted-foreground">{metric.period}</span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{metric.title}</p>
                    <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                    <div className="flex items-center mt-1">
                      {isPositive ? (
                        <TrendingUp className="w-3 h-3 text-success mr-1" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-destructive mr-1" />
                      )}
                      <span className={`text-xs ${
                        isPositive ? "text-success" : "text-destructive"
                      }`}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Asset Performance */}
        <Card className="bg-card/80 backdrop-blur-sm border-border mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5" />
              <span>Asset Performance</span>
            </CardTitle>
            <CardDescription>Individual asset performance breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {assetPerformance.map((asset, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{asset.name}</h3>
                    <p className="text-sm text-muted-foreground">{asset.type}</p>
                  </div>
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="text-center">
                      <p className="text-muted-foreground">Current Value</p>
                      <p className="font-semibold text-foreground">{asset.currentValue}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-muted-foreground">Invested</p>
                      <p className="font-semibold text-foreground">{asset.invested}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-muted-foreground">ROI</p>
                      <p className={`font-semibold ${
                        asset.roi.startsWith('+') ? 'text-success' : 'text-destructive'
                      }`}>{asset.roi}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-muted-foreground">Yield</p>
                      <p className="font-semibold text-success">{asset.yield}</p>
                    </div>
                    <Badge className={getStatusColor(asset.status)}>
                      {asset.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-card/80 backdrop-blur-sm border-border">
          <CardHeader>
            <CardTitle>Performance Actions</CardTitle>
            <CardDescription>Optimize your portfolio based on analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start">
                <BarChart3 className="w-4 h-4 mr-2" />
                Download Report
              </Button>
              <Button variant="outline" className="justify-start">
                <Users className="w-4 h-4 mr-2" />
                Share Analytics
              </Button>
              <Button variant="outline" className="justify-start">
                <Target className="w-4 h-4 mr-2" />
                Set Goals
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;