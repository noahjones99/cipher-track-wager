import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, Zap, Brain, Code, ArrowRight, BookOpen, Play } from "lucide-react";

const LearnFHE = () => {
  const concepts = [
    {
      icon: <Lock className="w-8 h-8 text-primary" />,
      title: "What is FHE?",
      description: "Fully Homomorphic Encryption allows computations to be performed on encrypted data without decrypting it first.",
      details: "FHE enables mathematical operations on ciphertext, producing an encrypted result that, when decrypted, matches the result of operations performed on the plaintext."
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Privacy Preservation",
      description: "Your sensitive data remains encrypted throughout the entire computation process.",
      details: "Unlike traditional systems where data must be decrypted to be processed, FHE keeps your information secure at all times while still allowing meaningful computations."
    },
    {
      icon: <Brain className="w-8 h-8 text-secondary" />,
      title: "Zero-Knowledge Proofs",
      description: "Verify the correctness of computations without revealing any underlying data.",
      details: "Mathematical proofs that demonstrate knowledge of information without actually revealing that information, ensuring transparency while maintaining privacy."
    },
    {
      icon: <Zap className="w-8 h-8 text-neon-green" />,
      title: "Real-time Processing",
      description: "Advanced implementations allow for real-time encrypted computations in gaming scenarios.",
      details: "Modern FHE schemes have been optimized for performance, enabling real-time applications like encrypted racing games and private betting systems."
    }
  ];

  const racingApplications = [
    {
      title: "Encrypted Wagers",
      description: "Bet amounts remain hidden from other players and even the platform until race completion.",
      example: "Player A bets 0.5 ETH, but this amount is encrypted and unknown to others during the race."
    },
    {
      title: "Private Strategies",
      description: "Racing decisions and strategies are computed on encrypted data, preserving competitive advantage.",
      example: "Speed boosts, lane changes, and other tactical decisions remain private throughout the race."
    },
    {
      title: "Anonymous Leaderboards",
      description: "Performance metrics are calculated without revealing individual player identities.",
      example: "Rankings are updated in real-time while keeping player identities completely anonymous."
    },
    {
      title: "Fair Result Verification",
      description: "Race outcomes can be verified for fairness without exposing sensitive participant data.",
      example: "Anyone can verify that the race was conducted fairly without seeing private wager amounts or strategies."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-primary/20 bg-card/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Learn About FHE</h1>
            <Button variant="racing" className="neon-glow">
              <Play className="w-4 h-4 mr-2" />
              Try Demo
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Brain className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              Fully Homomorphic Encryption
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The revolutionary cryptographic technology that enables computations on encrypted data, 
              making truly private gaming and betting possible for the first time.
            </p>
          </div>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            Understanding FHE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {concepts.map((concept, index) => (
              <Card key={index} className="p-8 glass-cyberpunk border-primary/20 hover:border-primary/40 transition-all duration-300 neon-glow">
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    {concept.icon}
                    <h3 className="text-xl font-semibold ml-3 text-primary">
                      {concept.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {concept.description}
                  </p>
                  <p className="text-sm text-muted-foreground/80">
                    {concept.details}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Racing Applications */}
      <section className="py-16 px-6 bg-card/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">
            FHE in Encrypted Racing
          </h2>
          
          <div className="space-y-8">
            {racingApplications.map((application, index) => (
              <Card key={index} className="p-8 glass-cyberpunk border-primary/20 hover:border-primary/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-primary">
                      {application.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {application.description}
                    </p>
                  </div>
                  <div className="flex-1 bg-background/20 p-4 rounded-lg border border-accent/20">
                    <p className="text-sm text-accent font-medium mb-2">Example:</p>
                    <p className="text-sm text-muted-foreground">
                      {application.example}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Deep Dive */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              Technical Implementation
            </h2>
            
            <div className="space-y-8">
              <Card className="p-8 glass-cyberpunk border-primary/20 neon-glow">
                <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                  <Code className="w-6 h-6 mr-3" />
                  Encryption Process
                </h3>
                <p className="text-muted-foreground mb-4">
                  When you place a wager or make a racing decision, the data is encrypted using lattice-based 
                  cryptography. This creates a mathematical representation that hides the original value while 
                  preserving the ability to perform computations.
                </p>
                <div className="bg-background/20 p-4 rounded-lg border border-primary/20 font-mono text-sm">
                  <div className="text-neon-green">// Example: Encrypting a wager amount</div>
                  <div className="text-muted-foreground">plaintext_wager = 0.5 ETH</div>
                  <div className="text-primary">encrypted_wager = FHE.encrypt(plaintext_wager, public_key)</div>
                  <div className="text-accent">// Wager is now computationally secure</div>
                </div>
              </Card>

              <Card className="p-8 glass-cyberpunk border-accent/20 neon-glow">
                <h3 className="text-xl font-semibold mb-4 text-accent flex items-center">
                  <Eye className="w-6 h-6 mr-3" />
                  Computation on Encrypted Data
                </h3>
                <p className="text-muted-foreground mb-4">
                  During races, all computations are performed directly on the encrypted data. 
                  Race results, winner determination, and payout calculations happen without 
                  ever decrypting sensitive information.
                </p>
                <div className="bg-background/20 p-4 rounded-lg border border-accent/20 font-mono text-sm">
                  <div className="text-neon-green">// Computing race results on encrypted data</div>
                  <div className="text-muted-foreground">encrypted_result = race_function(encrypted_positions, encrypted_wagers)</div>
                  <div className="text-primary">// Results computed without decryption</div>
                </div>
              </Card>

              <Card className="p-8 glass-cyberpunk border-secondary/20 racing-glow">
                <h3 className="text-xl font-semibold mb-4 text-secondary flex items-center">
                  <Shield className="w-6 h-6 mr-3" />
                  Result Verification
                </h3>
                <p className="text-muted-foreground mb-4">
                  Zero-knowledge proofs provide mathematical guarantees that computations were 
                  performed correctly without revealing the underlying data. This ensures fairness 
                  and transparency while maintaining complete privacy.
                </p>
                <div className="bg-background/20 p-4 rounded-lg border border-secondary/20 font-mono text-sm">
                  <div className="text-neon-green">// Generating proof of correct computation</div>
                  <div className="text-muted-foreground">proof = generate_zk_proof(computation, encrypted_inputs)</div>
                  <div className="text-primary">verify_proof(proof) // Returns true if computation was correct</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 px-6 bg-card/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Ready to Experience FHE?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Start racing with complete privacy and see Fully Homomorphic Encryption in action. 
            Your first race is the best way to understand this revolutionary technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="racing" className="text-lg px-8 py-6 neon-glow">
              <Play className="w-5 h-5 mr-2" />
              Start Your First Race
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:border-primary/60">
              <BookOpen className="w-5 h-5 mr-2" />
              Read Technical Papers
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnFHE;