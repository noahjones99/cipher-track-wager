import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, Zap, Key, Database, FileCheck, Users } from "lucide-react";

const Privacy = () => {
  const privacyFeatures = [
    {
      icon: <Lock className="w-8 h-8 text-primary" />,
      title: "Fully Homomorphic Encryption",
      description: "All race data and wager amounts remain encrypted throughout the entire racing process. Computations are performed on encrypted data without ever revealing the underlying information."
    },
    {
      icon: <Eye className="w-8 h-8 text-accent" />,
      title: "Zero-Knowledge Proofs",
      description: "Race outcomes are verified without revealing any sensitive information about participants, wager amounts, or race strategies. Prove fairness without compromising privacy."
    },
    {
      icon: <Key className="w-8 h-8 text-secondary" />,
      title: "Anonymous Participation",
      description: "Participate in races without revealing your identity. Only wallet addresses are used for transactions, ensuring complete anonymity in the racing ecosystem."
    },
    {
      icon: <Database className="w-8 h-8 text-neon-green" />,
      title: "Encrypted Data Storage",
      description: "All user data, race history, and performance metrics are stored in encrypted form. Even our systems cannot access your private racing information."
    }
  ];

  const privacyPrinciples = [
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Privacy by Design",
      description: "Built from the ground up with privacy as the core principle"
    },
    {
      icon: <FileCheck className="w-6 h-6 text-accent" />,
      title: "Transparent Operations",
      description: "All smart contracts are auditable and open-source"
    },
    {
      icon: <Users className="w-6 h-6 text-secondary" />,
      title: "User Control",
      description: "You maintain complete control over your data and participation"
    },
    {
      icon: <Zap className="w-6 h-6 text-neon-green" />,
      title: "Real-time Privacy",
      description: "Privacy protection remains active during live racing events"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-primary/20 bg-card/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-primary">Privacy & Security</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              Privacy-First Racing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of confidential gaming where your privacy is protected by 
              cutting-edge cryptographic technology throughout every race.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Features */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Advanced Privacy Technology
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {privacyFeatures.map((feature, index) => (
              <Card key={index} className="p-8 glass-cyberpunk border-primary/20 hover:border-primary/40 transition-all duration-300 neon-glow">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 px-6 bg-card/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Our Privacy Principles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privacyPrinciples.map((principle, index) => (
              <Card key={index} className="p-6 glass-cyberpunk border-primary/20 hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {principle.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-primary">
                    {principle.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {principle.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              How We Protect Your Privacy
            </h2>
            
            <div className="space-y-8">
              <Card className="p-8 glass-cyberpunk border-primary/20 neon-glow">
                <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                  <Lock className="w-6 h-6 mr-3" />
                  During Races
                </h3>
                <p className="text-muted-foreground mb-4">
                  When you participate in a race, all sensitive data including your wager amount, 
                  race position, and strategy choices are encrypted using Fully Homomorphic Encryption (FHE). 
                  This allows race computations to be performed without ever decrypting your private information.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Wager amounts remain encrypted until race completion</li>
                  <li>Real-time position updates without revealing identities</li>
                  <li>Race outcomes computed on encrypted data</li>
                  <li>Private key never leaves your device</li>
                </ul>
              </Card>

              <Card className="p-8 glass-cyberpunk border-accent/20 neon-glow">
                <h3 className="text-xl font-semibold mb-4 text-accent flex items-center">
                  <Eye className="w-6 h-6 mr-3" />
                  Verification Process
                </h3>
                <p className="text-muted-foreground mb-4">
                  Zero-knowledge proofs ensure that race results are fair and verifiable 
                  without compromising participant privacy. Anyone can verify the integrity 
                  of race outcomes without accessing sensitive data.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Cryptographic proof of fair race execution</li>
                  <li>Public verification without data exposure</li>
                  <li>Tamper-proof result generation</li>
                  <li>Auditable smart contract logic</li>
                </ul>
              </Card>

              <Card className="p-8 glass-cyberpunk border-secondary/20 racing-glow">
                <h3 className="text-xl font-semibold mb-4 text-secondary flex items-center">
                  <Database className="w-6 h-6 mr-3" />
                  Data Protection
                </h3>
                <p className="text-muted-foreground mb-4">
                  Your racing history, performance metrics, and personal preferences are stored 
                  using advanced encryption techniques. Even our servers cannot access your 
                  private information without your explicit consent.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>End-to-end encryption for all user data</li>
                  <li>Decentralized storage solutions</li>
                  <li>Regular security audits and updates</li>
                  <li>User-controlled data access permissions</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-card/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Questions About Privacy?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We're committed to transparency about our privacy practices. 
            If you have any questions about how we protect your data, please don't hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Card className="p-4 glass-cyberpunk border-primary/20">
              <p className="text-sm text-muted-foreground">Security Team</p>
              <p className="font-semibold text-primary">security@cryptoracing.com</p>
            </Card>
            <Card className="p-4 glass-cyberpunk border-accent/20">
              <p className="text-sm text-muted-foreground">Privacy Officer</p>
              <p className="font-semibold text-accent">privacy@cryptoracing.com</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;