import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Building, 
  Palette, 
  Coins, 
  Search,
  Filter,
  TrendingUp,
  MapPin,
  Calendar,
  Users
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { toast } = useToast();
  const navigate = useNavigate();

  const assets = [
    {
      id: 1,
      name: "Manhattan Premium Office Tower",
      type: "Real Estate",
      location: "New York, NY",
      totalValue: "$5,200,000",
      tokenPrice: "$1,000",
      availableTokens: 1250,
      totalTokens: 5200,
      yield: "12.8%",
      image: "photo-1649972904349-6e44c42644a7",
      investors: 89,
      minInvestment: "$1,000",
      launchDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Vintage Monet Water Lilies",
      type: "Fine Art",
      location: "London, UK",
      totalValue: "$2,800,000",
      tokenPrice: "$500",
      availableTokens: 3200,
      totalTokens: 5600,
      yield: "8.4%",
      image: "photo-1488590528505-98d2b5aba04b",
      investors: 156,
      minInvestment: "$500",
      launchDate: "2024-02-01"
    },
    {
      id: 3,
      name: "Swiss Gold Reserve Fund",
      type: "Commodities",
      location: "Zurich, CH",
      totalValue: "$1,500,000",
      tokenPrice: "$250",
      availableTokens: 2100,
      totalTokens: 6000,
      yield: "6.2%",
      image: "photo-1581091226825-a6a2a5aee158",
      investors: 234,
      minInvestment: "$250",
      launchDate: "2024-01-20"
    },
    {
      id: 4,
      name: "Silicon Valley Tech Campus",
      type: "Real Estate",
      location: "San Francisco, CA",
      totalValue: "$8,900,000",
      tokenPrice: "$2,500",
      availableTokens: 890,
      totalTokens: 3560,
      yield: "15.2%",
      image: "photo-1531297484001-80022131f5a1",
      investors: 67,
      minInvestment: "$2,500",
      launchDate: "2024-02-10"
    },
    {
      id: 5,
      name: "Rare Wine Collection 2015",
      type: "Collectibles",
      location: "Bordeaux, FR",
      totalValue: "$750,000",
      tokenPrice: "$150",
      availableTokens: 1800,
      totalTokens: 5000,
      yield: "9.8%",
      image: "photo-1487058792275-0ad4aaf24ca7",
      investors: 98,
      minInvestment: "$150",
      launchDate: "2024-01-25"
    },
    {
      id: 6,
      name: "Tokyo Commercial Complex",
      type: "Real Estate",
      location: "Tokyo, JP",
      totalValue: "$4,200,000",
      tokenPrice: "$800",
      availableTokens: 2650,
      totalTokens: 5250,
      yield: "11.5%",
      image: "photo-1605810230434-7631ac76ec81",
      investors: 145,
      minInvestment: "$800",
      launchDate: "2024-02-05"
    }
  ];

  const getAssetIcon = (type: string) => {
    switch (type) {
      case "Real Estate": return Building;
      case "Fine Art": return Palette;
      case "Commodities": return Coins;
      case "Collectibles": return Palette;
      default: return Building;
    }
  };

  const getProgressPercentage = (available: number, total: number) => {
    return ((total - available) / total) * 100;
  };

  const filteredAssets = assets.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         asset.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         asset.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || asset.type.toLowerCase().replace(" ", "-") === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleViewDetails = (assetId: number) => {
    toast({
      title: "Asset Details",
      description: "Detailed asset information coming soon!",
    });
  };

  const handleInvestNow = (assetId: number) => {
    toast({
      title: "Investment Process",
      description: "Investment feature coming soon!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Asset Marketplace</h1>
          <p className="text-muted-foreground">Discover and invest in tokenized real-world assets</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search assets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="real-estate">Real Estate</SelectItem>
              <SelectItem value="fine-art">Fine Art</SelectItem>
              <SelectItem value="commodities">Commodities</SelectItem>
              <SelectItem value="collectibles">Collectibles</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Assets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssets.map((asset) => {
            const Icon = getAssetIcon(asset.type);
            const progress = getProgressPercentage(asset.availableTokens, asset.totalTokens);
            
            return (
              <Card key={asset.id} className="bg-card/80 backdrop-blur-sm border-border hover:bg-card/90 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${asset.image}?w=600&h=300&fit=crop`}
                    alt={asset.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {asset.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-success text-success-foreground">
                      {asset.yield} Yield
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon className="w-5 h-5 text-primary" />
                      <CardTitle className="text-lg text-foreground line-clamp-1">
                        {asset.name}
                      </CardTitle>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    {asset.location}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Value</span>
                    <span className="font-semibold text-foreground">{asset.totalValue}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Token Price</span>
                    <span className="font-semibold text-foreground">{asset.tokenPrice}</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Funding Progress</span>
                      <span className="text-foreground">{progress.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{asset.availableTokens} tokens left</span>
                      <span>{asset.totalTokens} total</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-4 h-4 mr-1" />
                      {asset.investors} investors
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(asset.launchDate).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1" onClick={() => handleViewDetails(asset.id)}>
                      <TrendingUp className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90" onClick={() => handleInvestNow(asset.id)}>
                      Invest Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {filteredAssets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No assets found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;