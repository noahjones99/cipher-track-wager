import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import RacingLogo from "@/components/RacingLogo";
import WalletConnect from "@/components/WalletConnect";
import RaceTrack from "@/components/RaceTrack";
import AnimatedFooter from "@/components/AnimatedFooter";
import { Play, Shield, Zap, Trophy, Lock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-primary/20 bg-card/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <RacingLogo />
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/races" className="text-foreground hover:text-primary transition-colors">Races</a>
            <a href="/leaderboard" className="text-foreground hover:text-primary transition-colors">Leaderboard</a>
            <a href="/privacy" className="text-foreground hover:text-primary transition-colors">Privacy</a>
          </nav>
          <WalletConnect />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-neon-glow animate-pulse-neon">
              Race Confidentially
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
              with FHE
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Experience the future of private gaming. All wagers and race outcomes remain fully encrypted until the finish line using Fully Homomorphic Encryption.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="racing" className="text-lg px-8 py-6" onClick={() => window.location.href = '/races'}>
              <Play className="w-5 h-5 mr-2" />
              Start Racing
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => window.location.href = '/learn-fhe'}>
              <Shield className="w-5 h-5 mr-2" />
              Learn About FHE
            </Button>
          </div>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center space-x-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 neon-glow">
              <Lock className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Zero-Knowledge Proofs</span>
            </div>
            <div className="flex items-center space-x-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 neon-glow">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">Real-time Racing</span>
            </div>
            <div className="flex items-center space-x-2 bg-secondary/10 border border-secondary/30 rounded-full px-4 py-2 racing-glow">
              <Trophy className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">Anonymous Betting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Race Track Visualization */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4 text-primary">Live Encrypted Races</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Watch races unfold in real-time while all sensitive data remains encrypted and private
          </p>
          <RaceTrack />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-card/20">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16 text-primary">Privacy-First Racing</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 glass-cyberpunk border-primary/20 hover:border-primary/40 transition-all duration-300 neon-glow">
              <Shield className="w-12 h-12 text-primary mb-6 mx-auto" />
              <h4 className="text-xl font-semibold mb-4 text-center text-primary">Fully Encrypted</h4>
              <p className="text-muted-foreground text-center">
                All race data, wager amounts, and player identities remain encrypted throughout the entire race using FHE technology.
              </p>
            </Card>
            
            <Card className="p-8 glass-cyberpunk border-accent/20 hover:border-accent/40 transition-all duration-300 neon-glow">
              <Zap className="w-12 h-12 text-accent mb-6 mx-auto" />
              <h4 className="text-xl font-semibold mb-4 text-center text-accent">Instant Payouts</h4>
              <p className="text-muted-foreground text-center">
                Smart contracts automatically distribute winnings the moment races end, with full transparency and zero counterparty risk.
              </p>
            </Card>
            
            <Card className="p-8 glass-cyberpunk border-secondary/20 hover:border-secondary/40 transition-all duration-300 racing-glow">
              <Trophy className="w-12 h-12 text-secondary mb-6 mx-auto" />
              <h4 className="text-xl font-semibold mb-4 text-center text-secondary">Provably Fair</h4>
              <p className="text-muted-foreground text-center">
                Every race outcome is verifiable through cryptographic proofs while maintaining complete privacy of all participants.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <AnimatedFooter />
    </div>
  );
};

export default Index;
