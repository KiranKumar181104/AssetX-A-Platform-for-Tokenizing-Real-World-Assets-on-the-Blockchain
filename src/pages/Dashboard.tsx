import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Building, 
  Palette, 
  Coins, 
  Plus,
  BarChart3,
  Users,
  DollarSign
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    { label: "Total Portfolio Value", value: "$2,450,000", change: "+12.5%", icon: DollarSign },
    { label: "Active Assets", value: "24", change: "+3", icon: Building },
    { label: "Total Investors", value: "1,247", change: "+89", icon: Users },
    { label: "Monthly Yield", value: "8.4%", change: "+0.8%", icon: BarChart3 },
  ];

  const assets = [
    {
      id: 1,
      name: "Manhattan Office Building",
      type: "Real Estate",
      value: "$1,200,000",
      owned: "15.5%",
      yield: "12.3%",
      status: "Active",
      progress: 85
    },
    {
      id: 2,
      name: "Rare Picasso Painting",
      type: "Fine Art",
      value: "$850,000",
      owned: "8.2%",
      yield: "6.7%",
      status: "Active",
      progress: 100
    },
    {
      id: 3,
      name: "Gold Commodity Fund",
      type: "Commodities",
      value: "$400,000",
      owned: "25.0%",
      yield: "4.1%",
      status: "Pending",
      progress: 60
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-success text-success-foreground";
      case "Pending": return "bg-warning text-warning-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getAssetIcon = (type: string) => {
    switch (type) {
      case "Real Estate": return Building;
      case "Fine Art": return Palette;
      case "Commodities": return Coins;
      default: return Building;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Manage your tokenized assets</p>
          </div>
          <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
            <Plus className="w-4 h-4 mr-2" />
            Tokenize Asset
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <p className="text-sm text-success">{stat.change}</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Assets Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2 bg-card/80 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Your Assets</CardTitle>
              <CardDescription>Track performance of your tokenized investments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assets.map((asset) => {
                  const Icon = getAssetIcon(asset.type);
                  return (
                    <div key={asset.id} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{asset.name}</h3>
                          <p className="text-sm text-muted-foreground">{asset.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground">{asset.value}</p>
                        <p className="text-sm text-muted-foreground">Owned: {asset.owned}</p>
                      </div>
                      <div className="flex flex-col items-end space-y-2">
                        <Badge className={getStatusColor(asset.status)}>
                          {asset.status}
                        </Badge>
                        <p className="text-sm text-success">+{asset.yield}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Building className="w-4 h-4 mr-2" />
                  List New Asset
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Investors
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Token Purchase</span>
                    <span className="text-success">+$12,500</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Yield Distribution</span>
                    <span className="text-success">+$2,100</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Asset Listed</span>
                    <span className="text-primary">New</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;