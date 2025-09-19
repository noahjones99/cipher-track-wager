import { Zap, Shield } from "lucide-react";

const RacingLogo = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        {/* Racing Wheel with Encrypted Circuits */}
        <div className="w-12 h-12 rounded-full border-4 border-primary neon-glow bg-card relative overflow-hidden">
          {/* Wheel Spokes */}
          <div className="absolute inset-2 rounded-full border-2 border-primary/60">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary/80 transform -translate-y-0.5"></div>
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-primary/80 transform -translate-x-0.5"></div>
            <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-primary/60 transform -translate-y-0.5 -translate-x-1/2 rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 w-full h-0.5 bg-primary/60 transform -translate-y-0.5 -translate-x-1/2 -rotate-45"></div>
          </div>
          
          {/* Center Hub with Encryption Symbol */}
          <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <Shield className="w-2 h-2 text-primary-foreground" />
          </div>
          
          {/* Encrypted Circuit Patterns */}
          <div className="absolute inset-0 opacity-60">
            <div className="absolute top-1 left-1 w-1 h-1 bg-accent rounded-full animate-pulse"></div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-secondary rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-1 left-1 w-1 h-1 bg-neon-green rounded-full animate-pulse delay-700"></div>
            <div className="absolute bottom-1 right-1 w-1 h-1 bg-neon-orange rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
        
        {/* Glowing Effect */}
        <div className="absolute inset-0 w-12 h-12 rounded-full bg-primary/20 blur-md animate-pulse-neon"></div>
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-center space-x-1">
          <span className="text-xl font-bold text-primary text-neon-glow">CRYPTO</span>
          <Zap className="w-4 h-4 text-accent" />
        </div>
        <span className="text-sm text-muted-foreground font-medium tracking-wider">RACING</span>
      </div>
    </div>
  );
};

export default RacingLogo;