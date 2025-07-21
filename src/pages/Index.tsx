import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Shield, TrendingUp, Users, Globe, Zap } from "lucide-react";

const Index = () => {
  const features = [
    { icon: Building, title: "Asset Tokenization", description: "Convert real-world assets into blockchain tokens" },
    { icon: Shield, title: "KYC/AML Compliance", description: "Built-in regulatory compliance and verification" },
    { icon: TrendingUp, title: "Fractional Ownership", description: "Invest in high-value assets with minimal capital" },
    { icon: Users, title: "Global Access", description: "Democratized access to premium investments worldwide" },
    { icon: Globe, title: "Cross-Chain Support", description: "Multi-blockchain compatibility for maximum liquidity" },
    { icon: Zap, title: "Instant Trading", description: "Real-time secondary market trading capabilities" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Real-World Asset Tokenization Platform
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Unlock <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Global Assets</span> with Blockchain
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            AssetX democratizes access to real estate, fine art, commodities, and private equity through secure tokenization and fractional ownership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/marketplace">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Explore Marketplace
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline">
                View Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Platform Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Advanced blockchain technology meets real-world asset management
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-border hover:bg-card/90 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Index;
