import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Building, 
  Palette, 
  Coins, 
  TrendingUp,
  TrendingDown,
  DollarSign,
  PieChart,
  Calendar,
  Download,
  Eye,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { toast } = useToast();

  const portfolioStats = {
    totalValue: 2450000,
    totalInvested: 2180000,
    totalGain: 270000,
    gainPercentage: 12.4,
    monthlyYield: 8.4,
    assets: 8
  };

  const holdings = [
    {
      id: 1,
      name: "Manhattan Office Building",
      type: "Real Estate",
      invested: 150000,
      currentValue: 185000,
      tokens: 150,
      totalTokens: 5200,
      ownership: 2.88,
      yield: 12.3,
      gain: 35000,
      gainPercent: 23.3,
      lastDividend: 1850,
      nextDividend: "2024-03-15"
    },
    {
      id: 2,
      name: "Rare Picasso Painting",
      type: "Fine Art",
      invested: 70000,
      currentValue: 78000,
      tokens: 140,
      totalTokens: 5600,
      ownership: 2.5,
      yield: 6.7,
      gain: 8000,
      gainPercent: 11.4,
      lastDividend: 0,
      nextDividend: "2024-04-01"
    },
    {
      id: 3,
      name: "Gold Commodity Fund",
      type: "Commodities",
      invested: 100000,
      currentValue: 92000,
      tokens: 400,
      totalTokens: 6000,
      ownership: 6.67,
      yield: 4.1,
      gain: -8000,
      gainPercent: -8.0,
      lastDividend: 410,
      nextDividend: "2024-03-30"
    },
    {
      id: 4,
      name: "Swiss Tech Startup Equity",
      type: "Private Equity",
      invested: 50000,
      currentValue: 73000,
      tokens: 200,
      totalTokens: 2000,
      ownership: 10.0,
      yield: 18.5,
      gain: 23000,
      gainPercent: 46.0,
      lastDividend: 925,
      nextDividend: "2024-06-15"
    }
  ];

  const transactions = [
    {
      id: 1,
      type: "purchase",
      asset: "Manhattan Office Building",
      amount: 15000,
      tokens: 15,
      price: 1000,
      date: "2024-02-15",
      status: "completed"
    },
    {
      id: 2,
      type: "dividend",
      asset: "Swiss Tech Startup Equity",
      amount: 925,
      date: "2024-02-01",
      status: "completed"
    },
    {
      id: 3,
      type: "sale",
      asset: "Gold Commodity Fund",
      amount: 5000,
      tokens: 20,
      price: 250,
      date: "2024-01-28",
      status: "completed"
    },
    {
      id: 4,
      type: "purchase",
      asset: "Rare Picasso Painting",
      amount: 10000,
      tokens: 20,
      price: 500,
      date: "2024-01-20",
      status: "completed"
    }
  ];

  const getAssetIcon = (type: string) => {
    switch (type) {
      case "Real Estate": return Building;
      case "Fine Art": return Palette;
      case "Commodities": return Coins;
      case "Private Equity": return TrendingUp;
      default: return Building;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "purchase": return ArrowDownRight;
      case "sale": return ArrowUpRight;
      case "dividend": return DollarSign;
      default: return DollarSign;
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case "purchase": return "text-warning";
      case "sale": return "text-success";
      case "dividend": return "text-primary";
      default: return "text-muted-foreground";
    }
  };

  const handleExportReport = () => {
    toast({
      title: "Export Report",
      description: "Portfolio report export feature coming soon!",
    });
  };

  const handleViewDetails = (holdingId: number) => {
    toast({
      title: "Asset Details",
      description: "Detailed asset information coming soon!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Portfolio</h1>
            <p className="text-muted-foreground">Track your tokenized asset investments</p>
          </div>
          <Button variant="outline" onClick={handleExportReport}>
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
                  <p className="text-2xl font-bold text-foreground">{formatCurrency(portfolioStats.totalValue)}</p>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="w-4 h-4 text-success mr-1" />
                    <p className="text-sm text-success">+{portfolioStats.gainPercentage}%</p>
                  </div>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <PieChart className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Gains</p>
                  <p className="text-2xl font-bold text-success">{formatCurrency(portfolioStats.totalGain)}</p>
                  <p className="text-sm text-muted-foreground">vs {formatCurrency(portfolioStats.totalInvested)} invested</p>
                </div>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Monthly Yield</p>
                  <p className="text-2xl font-bold text-foreground">{portfolioStats.monthlyYield}%</p>
                  <p className="text-sm text-muted-foreground">{portfolioStats.assets} active assets</p>
                </div>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Holdings</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6">
              {holdings.map((holding) => {
                const Icon = getAssetIcon(holding.type);
                const isPositive = holding.gain >= 0;
                
                return (
                  <Card key={holding.id} className="bg-card/80 backdrop-blur-sm border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{holding.name}</h3>
                            <p className="text-sm text-muted-foreground">{holding.type}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" onClick={() => handleViewDetails(holding.id)}>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Current Value</p>
                          <p className="font-semibold text-foreground">{formatCurrency(holding.currentValue)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Invested</p>
                          <p className="font-semibold text-foreground">{formatCurrency(holding.invested)}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Gain/Loss</p>
                          <p className={`font-semibold ${isPositive ? 'text-success' : 'text-destructive'}`}>
                            {isPositive ? '+' : ''}{formatCurrency(holding.gain)} ({isPositive ? '+' : ''}{holding.gainPercent}%)
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Ownership</p>
                          <p className="font-semibold text-foreground">{holding.ownership}%</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Your Tokens</span>
                          <span className="text-foreground">{holding.tokens} / {holding.totalTokens}</span>
                        </div>
                        <Progress value={(holding.tokens / holding.totalTokens) * 100} className="h-2" />
                      </div>

                      <div className="flex justify-between items-center mt-4 pt-4 border-t border-border">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Yield: </span>
                          <span className="text-success font-semibold">{holding.yield}%</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Next Dividend: </span>
                          <span className="text-foreground font-semibold">{holding.nextDividend}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Recent Transactions</CardTitle>
                <CardDescription>Your asset trading and dividend history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => {
                    const Icon = getTransactionIcon(transaction.type);
                    const colorClass = getTransactionColor(transaction.type);
                    
                    return (
                      <div key={transaction.id} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-background`}>
                            <Icon className={`w-5 h-5 ${colorClass}`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground capitalize">{transaction.type}</h4>
                            <p className="text-sm text-muted-foreground">{transaction.asset}</p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <p className={`font-semibold ${colorClass}`}>
                            {transaction.type === 'sale' || transaction.type === 'dividend' ? '+' : '-'}
                            {formatCurrency(transaction.amount)}
                          </p>
                          {transaction.tokens && (
                            <p className="text-sm text-muted-foreground">
                              {transaction.tokens} tokens @ {formatCurrency(transaction.price!)}
                            </p>
                          )}
                          <p className="text-xs text-muted-foreground">{transaction.date}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card/80 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Asset Allocation</CardTitle>
                  <CardDescription>Distribution by asset type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Real Estate</span>
                      <span className="text-sm font-semibold text-foreground">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Fine Art</span>
                      <span className="text-sm font-semibold text-foreground">20%</span>
                    </div>
                    <Progress value={20} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Commodities</span>
                      <span className="text-sm font-semibold text-foreground">10%</span>
                    </div>
                    <Progress value={10} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Private Equity</span>
                      <span className="text-sm font-semibold text-foreground">5%</span>
                    </div>
                    <Progress value={5} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Performance Metrics</CardTitle>
                  <CardDescription>Key portfolio statistics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total ROI</span>
                    <span className="text-sm font-semibold text-success">+12.4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Best Performer</span>
                    <span className="text-sm font-semibold text-foreground">Swiss Tech Startup</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Avg. Yield</span>
                    <span className="text-sm font-semibold text-foreground">10.4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Dividends</span>
                    <span className="text-sm font-semibold text-success">$3,185</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Risk Score</span>
                    <span className="text-sm font-semibold text-warning">Medium</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Portfolio;