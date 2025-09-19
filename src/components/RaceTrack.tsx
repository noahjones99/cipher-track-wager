const RaceTrack = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto my-16">
      {/* Track Container */}
      <div className="relative h-48 bg-card/50 rounded-3xl overflow-hidden glass-cyberpunk">
        {/* Main Track */}
        <div className="absolute inset-4 bg-muted/30 rounded-2xl border-2 border-primary/30">
          {/* Inner Track */}
          <div className="absolute inset-4 bg-background/20 rounded-xl border border-accent/40">
            {/* Track Center */}
            <div className="absolute inset-6 bg-muted/20 rounded-lg"></div>
          </div>
        </div>
        
        {/* Neon Racing Lines */}
        <div className="absolute top-8 left-8 right-8 h-1 bg-gradient-to-r from-primary via-accent to-secondary animate-race-track rounded-full"></div>
        <div className="absolute bottom-8 left-8 right-8 h-1 bg-gradient-to-r from-secondary via-neon-magenta to-primary animate-race-track rounded-full" style={{ animationDelay: '1s' }}></div>
        
        {/* Racing Cars/Indicators */}
        <div className="absolute top-6 left-12 w-8 h-4 bg-primary rounded-full neon-glow animate-pulse"></div>
        <div className="absolute top-6 left-24 w-8 h-4 bg-accent rounded-full neon-glow animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-6 left-36 w-8 h-4 bg-secondary rounded-full neon-glow animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Encrypted Data Streams */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-16 w-2 h-2 bg-neon-green rounded-full animate-ping"></div>
          <div className="absolute top-24 right-20 w-2 h-2 bg-neon-cyan rounded-full animate-ping" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute bottom-16 left-20 w-2 h-2 bg-neon-orange rounded-full animate-ping" style={{ animationDelay: '1.4s' }}></div>
          <div className="absolute bottom-20 right-16 w-2 h-2 bg-neon-magenta rounded-full animate-ping" style={{ animationDelay: '2.1s' }}></div>
        </div>
        
        {/* Track Labels */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
          <span className="text-xs text-primary font-mono bg-background/80 px-2 py-1 rounded">ENCRYPTED ZONE</span>
        </div>
        <div className="absolute bottom-2 right-4">
          <span className="text-xs text-accent font-mono bg-background/80 px-2 py-1 rounded">FHE ACTIVE</span>
        </div>
      </div>
      
      {/* Track Description */}
      <div className="text-center mt-6">
        <p className="text-muted-foreground max-w-2xl mx-auto">
          All race data and wager amounts remain fully encrypted until the finish line. 
          Experience true privacy in competitive racing with zero-knowledge proofs.
        </p>
      </div>
    </div>
  );
};

export default RaceTrack;