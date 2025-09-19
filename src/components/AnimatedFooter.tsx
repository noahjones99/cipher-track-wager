import { Code, Flag } from "lucide-react";

const AnimatedFooter = () => {
  return (
    <footer className="relative mt-32 bg-card/30 border-t border-primary/20">
      <div className="container mx-auto px-6 py-12">
        {/* Checkered Flag to Digital Code Animation */}
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-20 animate-digital-morph">
            {/* Checkered Flag Pattern */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 gap-0">
              {Array.from({ length: 32 }, (_, i) => (
                <div
                  key={i}
                  className={`
                    ${(Math.floor(i / 8) + (i % 8)) % 2 === 0 ? 'bg-foreground' : 'bg-background'}
                    transition-all duration-1000 hover:bg-primary
                  `}
                />
              ))}
            </div>
            
            {/* Digital Code Overlay */}
            <div className="absolute inset-0 bg-background/80 opacity-0 hover:opacity-100 transition-opacity duration-1000 flex items-center justify-center">
              <Code className="w-8 h-8 text-primary" />
            </div>
            
            {/* Flag Icon */}
            <div className="absolute -right-2 -top-2">
              <Flag className="w-6 h-6 text-accent animate-pulse" />
            </div>
          </div>
        </div>
        
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Encrypted Racing</h3>
            <p className="text-muted-foreground text-sm">
              The future of private competitive gaming powered by Fully Homomorphic Encryption.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-accent mb-4">Technology</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Zero-Knowledge Proofs</li>
              <li>• Fully Homomorphic Encryption</li>
              <li>• Blockchain Integration</li>
              <li>• Real-time Racing</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4">Privacy First</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Anonymous Wagering</li>
              <li>• Encrypted Race Data</li>
              <li>• Private Outcomes</li>
              <li>• Secure Transactions</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2024 CryptoRacing. Race Confidentially with FHE.
          </div>
          
          {/* Digital Animation */}
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {[0, 1, 0, 1, 1, 0, 1, 0].map((bit, i) => (
                <span
                  key={i}
                  className={`text-xs font-mono ${bit ? 'text-primary' : 'text-muted-foreground'} animate-pulse`}
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {bit}
                </span>
              ))}
            </div>
            <Code className="w-4 h-4 text-primary animate-spin" style={{ animationDuration: '3s' }} />
          </div>
        </div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default AnimatedFooter;