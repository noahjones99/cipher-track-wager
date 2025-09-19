import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Medal, Award, Zap, Shield, TrendingUp } from "lucide-react";

const Leaderboard = () => {
  const topRacers = [
    {
      rank: 1,
      address: "0x1234...5678",
      wins: 47,
      totalRaces: 52,
      winRate: 90.4,
      totalEarnings: "12.3 ETH",
      avatar: "🏆"
    },
    {
      rank: 2,
      address: "0x8765...4321",
      wins: 38,
      totalRaces: 45,
      winRate: 84.4,
      totalEarnings: "9.7 ETH",
      avatar: "🥈"
    },
    {
      rank: 3,
      address: "0x9999...1111",
      wins: 31,
      totalRaces: 39,
      winRate: 79.5,
      totalEarnings: "7.8 ETH",
      avatar: "🥉"
    },
    {
      rank: 4,
      address: "0x4444...7777",
      wins: 28,
      totalRaces: 41,
      winRate: 68.3,
      totalEarnings: "6.2 ETH",
      avatar: "🏁"
    },
    {
      rank: 5,
      address: "0x5555...3333",
      wins: 25,
      totalRaces: 38,
      winRate: 65.8,
      totalEarnings: "5.4 ETH",
      avatar: "⚡"
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <div className="w-6 h-6 flex items-center justify-center text-muted-foreground font-bold">#{rank}</div>;
    }
  };

  const getRankBadge = (rank: number) => {
    if (rank <= 3) {
      return "default";
    } else if (rank <= 10) {
      return "secondary";
    } else {
      return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-primary/20 bg-card/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Leaderboard</h1>
            <Button variant="outline" className="border-primary/30 hover:border-primary/60">
              <TrendingUp className="w-4 h-4 mr-2" />
              View Analytics
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 glass-cyberpunk border-primary/20 neon-glow">
            <div className="flex items-center space-x-3">
              <Trophy className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Top Racer Win Rate</p>
                <p className="text-2xl font-bold text-primary">90.4%</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 glass-cyberpunk border-accent/20 neon-glow">
            <div className="flex items-center space-x-3">
              <Zap className="w-8 h-8 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Total Races</p>
                <p className="text-2xl font-bold text-accent">1,247</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 glass-cyberpunk border-secondary/20 racing-glow">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-secondary" />
              <div>
                <p className="text-sm text-muted-foreground">Privacy Protected</p>
                <p className="text-2xl font-bold text-secondary">100%</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Leaderboard */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Top Racers</h2>
          
          {/* Header */}
          <Card className="p-4 glass-cyberpunk border-primary/20">
            <div className="grid grid-cols-7 gap-4 text-sm font-semibold text-muted-foreground">
              <div>Rank</div>
              <div>Racer</div>
              <div>Wins</div>
              <div>Total Races</div>
              <div>Win Rate</div>
              <div>Earnings</div>
              <div>Status</div>
            </div>
          </Card>

          {/* Leaderboard Entries */}
          {topRacers.map((racer, index) => (
            <Card 
              key={racer.rank} 
              className={`p-4 glass-cyberpunk transition-all duration-300 hover:scale-[1.01] ${
                racer.rank <= 3 
                  ? 'border-primary/40 neon-glow' 
                  : 'border-primary/20 hover:border-primary/30'
              }`}
            >
              <div className="grid grid-cols-7 gap-4 items-center">
                <div className="flex items-center space-x-2">
                  {getRankIcon(racer.rank)}
                  <span className="font-bold text-foreground">#{racer.rank}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{racer.avatar}</span>
                  <span className="font-mono text-sm text-primary">{racer.address}</span>
                </div>
                
                <div className="text-foreground font-semibold">{racer.wins}</div>
                
                <div className="text-muted-foreground">{racer.totalRaces}</div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-accent font-semibold">{racer.winRate}%</span>
                  <Badge variant={getRankBadge(racer.rank)} className="text-xs">
                    {racer.winRate >= 80 ? 'Elite' : racer.winRate >= 60 ? 'Pro' : 'Rising'}
                  </Badge>
                </div>
                
                <div className="text-secondary font-semibold">{racer.totalEarnings}</div>
                
                <div>
                  <Badge 
                    variant="outline" 
                    className="border-neon-green/30 text-neon-green bg-neon-green/10"
                  >
                    Active
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Privacy Notice */}
        <Card className="mt-12 p-8 glass-cyberpunk border-neon-green/20 neon-glow">
          <div className="text-center">
            <Shield className="w-12 h-12 text-neon-green mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-neon-green mb-2">Anonymous Leaderboard</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All racer identities and detailed statistics remain encrypted. Only anonymized wallet addresses 
              and aggregate performance data are displayed while preserving complete privacy through FHE.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Leaderboard;