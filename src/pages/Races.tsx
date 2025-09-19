import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Timer, Trophy, Users, Zap, Lock, Play, Plus } from "lucide-react";
import { useState } from "react";
import { useCipherTrackWager } from "@/hooks/useContract";
import { useAccount } from "wagmi";
import { toast } from "sonner";

const Races = () => {
  const { address, isConnected } = useAccount();
  const { createRace, registerParticipant } = useCipherTrackWager();
  const [isCreateRaceOpen, setIsCreateRaceOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [raceForm, setRaceForm] = useState({
    name: '',
    description: '',
    duration: ''
  });
  const [participantForm, setParticipantForm] = useState({
    name: ''
  });

  const activeRaces = [
    {
      id: 1,
      name: "Thunder Circuit",
      participants: 8,
      maxParticipants: 12,
      prizePool: "0.5 ETH",
      timeLeft: "2m 34s",
      status: "active"
    },
    {
      id: 2,
      name: "Neon Highway",
      participants: 5,
      maxParticipants: 8,
      prizePool: "0.3 ETH",
      timeLeft: "5m 12s",
      status: "waiting"
    },
    {
      id: 3,
      name: "Crypto Speedway",
      participants: 12,
      maxParticipants: 12,
      prizePool: "1.2 ETH",
      timeLeft: "Starting...",
      status: "starting"
    }
  ];

  const handleCreateRace = async () => {
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }

    try {
      const duration = parseInt(raceForm.duration) * 60; // Convert minutes to seconds
      await createRace(raceForm.name, raceForm.description, duration);
      toast.success("Race created successfully!");
      setIsCreateRaceOpen(false);
      setRaceForm({ name: '', description: '', duration: '' });
    } catch (error) {
      toast.error("Failed to create race");
      console.error(error);
    }
  };

  const handleRegisterParticipant = async () => {
    if (!isConnected) {
      toast.error("Please connect your wallet first");
      return;
    }

    try {
      await registerParticipant(participantForm.name);
      toast.success("Participant registered successfully!");
      setIsRegisterOpen(false);
      setParticipantForm({ name: '' });
    } catch (error) {
      toast.error("Failed to register participant");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-primary/20 bg-card/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Active Races</h1>
            <div className="flex items-center space-x-3">
              <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-primary/30 hover:border-primary/60">
                    <Plus className="w-4 h-4 mr-2" />
                    Register
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-cyberpunk border-primary/20">
                  <DialogHeader>
                    <DialogTitle className="text-primary">Register as Participant</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="participant-name">Participant Name</Label>
                      <Input
                        id="participant-name"
                        value={participantForm.name}
                        onChange={(e) => setParticipantForm({ ...participantForm, name: e.target.value })}
                        placeholder="Enter your racing name"
                        className="border-primary/30 focus:border-primary/60"
                      />
                    </div>
                    <Button onClick={handleRegisterParticipant} className="w-full neon-glow">
                      Register Participant
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Dialog open={isCreateRaceOpen} onOpenChange={setIsCreateRaceOpen}>
                <DialogTrigger asChild>
                  <Button variant="racing" className="neon-glow">
                    <Play className="w-4 h-4 mr-2" />
                    Create Race
                  </Button>
                </DialogTrigger>
                <DialogContent className="glass-cyberpunk border-primary/20">
                  <DialogHeader>
                    <DialogTitle className="text-primary">Create New Race</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="race-name">Race Name</Label>
                      <Input
                        id="race-name"
                        value={raceForm.name}
                        onChange={(e) => setRaceForm({ ...raceForm, name: e.target.value })}
                        placeholder="Enter race name"
                        className="border-primary/30 focus:border-primary/60"
                      />
                    </div>
                    <div>
                      <Label htmlFor="race-description">Description</Label>
                      <Textarea
                        id="race-description"
                        value={raceForm.description}
                        onChange={(e) => setRaceForm({ ...raceForm, description: e.target.value })}
                        placeholder="Enter race description"
                        className="border-primary/30 focus:border-primary/60"
                      />
                    </div>
                    <div>
                      <Label htmlFor="race-duration">Duration (minutes)</Label>
                      <Input
                        id="race-duration"
                        type="number"
                        value={raceForm.duration}
                        onChange={(e) => setRaceForm({ ...raceForm, duration: e.target.value })}
                        placeholder="Enter race duration in minutes"
                        className="border-primary/30 focus:border-primary/60"
                      />
                    </div>
                    <Button onClick={handleCreateRace} className="w-full neon-glow">
                      Create Race
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 glass-cyberpunk border-primary/20 neon-glow">
            <div className="flex items-center space-x-3">
              <Timer className="w-8 h-8 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Active Races</p>
                <p className="text-2xl font-bold text-primary">12</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 glass-cyberpunk border-accent/20 neon-glow">
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-accent" />
              <div>
                <p className="text-sm text-muted-foreground">Total Racers</p>
                <p className="text-2xl font-bold text-accent">148</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 glass-cyberpunk border-secondary/20 racing-glow">
            <div className="flex items-center space-x-3">
              <Trophy className="w-8 h-8 text-secondary" />
              <div>
                <p className="text-sm text-muted-foreground">Prize Pool</p>
                <p className="text-2xl font-bold text-secondary">5.7 ETH</p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 glass-cyberpunk border-neon-green/20 neon-glow">
            <div className="flex items-center space-x-3">
              <Lock className="w-8 h-8 text-neon-green" />
              <div>
                <p className="text-sm text-muted-foreground">Encrypted</p>
                <p className="text-2xl font-bold text-neon-green">100%</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Race List */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-primary mb-8">Join a Race</h2>
          
          {activeRaces.map((race) => (
            <Card key={race.id} className="p-6 glass-cyberpunk border-primary/20 hover:border-primary/40 transition-all duration-300 neon-glow">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-semibold text-primary">{race.name}</h3>
                    <Badge 
                      variant={race.status === 'active' ? 'default' : race.status === 'waiting' ? 'secondary' : 'destructive'}
                      className="neon-glow"
                    >
                      {race.status === 'active' ? 'Racing' : race.status === 'waiting' ? 'Waiting' : 'Starting'}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{race.participants}/{race.maxParticipants}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Trophy className="w-4 h-4" />
                      <span>{race.prizePool}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Timer className="w-4 h-4" />
                      <span>{race.timeLeft}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/30 hover:border-primary/60"
                  >
                    View Details
                  </Button>
                  <Button 
                    variant="racing" 
                    className="neon-glow"
                    disabled={race.participants >= race.maxParticipants}
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Join Race
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* FHE Info */}
        <Card className="mt-12 p-8 glass-cyberpunk border-neon-green/20 neon-glow">
          <div className="text-center">
            <Lock className="w-12 h-12 text-neon-green mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-neon-green mb-2">Fully Encrypted Racing</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All wager amounts, race positions, and outcomes remain fully encrypted using FHE technology. 
              Experience true privacy in competitive racing with zero-knowledge proofs.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Races;