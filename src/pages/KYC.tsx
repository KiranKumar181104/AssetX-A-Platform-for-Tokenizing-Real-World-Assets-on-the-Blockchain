import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Shield,
  Upload,
  CheckCircle,
  Clock,
  AlertCircle,
  FileText,
  Camera,
  Globe,
  User,
  Building,
  CreditCard
} from "lucide-react";

const KYC = () => {
  const [activeTab, setActiveTab] = useState("status");
  const [kycStatus, setKycStatus] = useState("in-progress"); // pending, in-progress, approved, rejected

  const kycProgress = {
    personal: 100,
    documents: 75,
    verification: 50,
    compliance: 25
  };

  const overallProgress = Object.values(kycProgress).reduce((a, b) => a + b, 0) / Object.keys(kycProgress).length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved": return "bg-success text-success-foreground";
      case "pending": return "bg-warning text-warning-foreground";
      case "rejected": return "bg-destructive text-destructive-foreground";
      case "in-progress": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved": return CheckCircle;
      case "pending": return Clock;
      case "rejected": return AlertCircle;
      case "in-progress": return Shield;
      default: return Clock;
    }
  };

  const requirements = [
    {
      title: "Personal Information",
      description: "Basic personal details and contact information",
      status: "completed",
      icon: User
    },
    {
      title: "Identity Verification",
      description: "Government-issued ID and proof of address",
      status: "in-progress",
      icon: FileText
    },
    {
      title: "Biometric Verification",
      description: "Live selfie and document verification",
      status: "pending",
      icon: Camera
    },
    {
      title: "Source of Funds",
      description: "Bank statements and income verification",
      status: "pending",
      icon: CreditCard
    },
    {
      title: "Compliance Check",
      description: "AML/CFT and sanctions screening",
      status: "pending",
      icon: Shield
    }
  ];

  const complianceChecks = [
    { name: "Anti-Money Laundering (AML)", status: "passed", description: "Automated screening completed" },
    { name: "Know Your Customer (KYC)", status: "in-progress", description: "Manual review in progress" },
    { name: "Counter Financing of Terrorism (CFT)", status: "passed", description: "No matches found" },
    { name: "Sanctions Screening", status: "passed", description: "All watchlists checked" },
    { name: "PEP Screening", status: "pending", description: "Politically Exposed Person check" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">KYC Verification</h1>
          <p className="text-muted-foreground">Complete your identity verification to access all platform features</p>
        </div>

        {/* Status Overview */}
        <Card className="bg-card/80 backdrop-blur-sm border-border mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-foreground">Verification Status</CardTitle>
                <CardDescription>Your current KYC verification progress</CardDescription>
              </div>
              <Badge className={getStatusColor(kycStatus)}>
                {kycStatus.replace('-', ' ').toUpperCase()}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Overall Progress</span>
                <span className="text-foreground font-semibold">{Math.round(overallProgress)}%</span>
              </div>
              <Progress value={overallProgress} className="h-3" />
              <p className="text-sm text-muted-foreground">
                Complete all verification steps to unlock full trading capabilities
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="status">Status</TabsTrigger>
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
          </TabsList>

          <TabsContent value="status" className="space-y-6">
            <div className="grid gap-4">
              {requirements.map((req, index) => {
                const Icon = req.icon;
                const StatusIcon = getStatusIcon(req.status);
                
                return (
                  <Card key={index} className="bg-card/80 backdrop-blur-sm border-border">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{req.title}</h3>
                            <p className="text-sm text-muted-foreground">{req.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Badge className={getStatusColor(req.status)}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {req.status.replace('-', ' ')}
                          </Badge>
                          {req.status !== "completed" && (
                            <Button size="sm" variant="outline">
                              Continue
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="personal" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Personal Information</CardTitle>
                <CardDescription>Provide your basic personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+1 (555) 123-4567" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input id="dateOfBirth" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="nationality">Nationality</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select nationality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Full Address</Label>
                  <Textarea id="address" placeholder="123 Main Street, City, State, ZIP Code" />
                </div>

                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Save Personal Information
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="documents" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-card/80 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Identity Documents</CardTitle>
                  <CardDescription>Upload government-issued ID</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload your passport or driver's license
                    </p>
                    <Button variant="outline" size="sm">
                      Choose File
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="idType">Document Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select document type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="passport">Passport</SelectItem>
                        <SelectItem value="drivers-license">Driver's License</SelectItem>
                        <SelectItem value="national-id">National ID Card</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/80 backdrop-blur-sm border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Proof of Address</CardTitle>
                  <CardDescription>Upload utility bill or bank statement</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload a recent utility bill or bank statement
                    </p>
                    <Button variant="outline" size="sm">
                      Choose File
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Document must be dated within the last 3 months and show your full name and address
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Biometric Verification</CardTitle>
                <CardDescription>Complete live selfie verification</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-8 bg-secondary/30 rounded-lg">
                  <div className="text-center">
                    <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Live Selfie Required</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Take a live photo to verify your identity matches your documents
                    </p>
                    <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                      Start Camera Verification
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compliance" className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Compliance Screening</CardTitle>
                <CardDescription>Automated security and compliance checks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceChecks.map((check, index) => {
                    const StatusIcon = getStatusIcon(check.status);
                    
                    return (
                      <div key={index} className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${getStatusColor(check.status)}`}>
                            <StatusIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground">{check.name}</h4>
                            <p className="text-sm text-muted-foreground">{check.description}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(check.status)}>
                          {check.status.replace('-', ' ')}
                        </Badge>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Source of Funds</CardTitle>
                <CardDescription>Declare the source of your investment funds</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fundSource">Primary Source of Funds</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select source of funds" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="salary">Employment Salary</SelectItem>
                      <SelectItem value="business">Business Income</SelectItem>
                      <SelectItem value="investment">Investment Returns</SelectItem>
                      <SelectItem value="inheritance">Inheritance</SelectItem>
                      <SelectItem value="savings">Personal Savings</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="occupation">Occupation</Label>
                  <Input id="occupation" placeholder="Software Engineer" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employer">Employer</Label>
                  <Input id="employer" placeholder="Company Name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="annualIncome">Annual Income Range</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select income range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-50k">Under $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                      <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                      <SelectItem value="over-500k">Over $500,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Submit Source of Funds Declaration
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default KYC;