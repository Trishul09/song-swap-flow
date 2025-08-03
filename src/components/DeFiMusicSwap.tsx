import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Check, ArrowLeftRight, Music, Zap, TrendingUp, Headphones, DollarSign } from 'lucide-react';
import songCover from '@/assets/song-cover.jpg';

const AudioWaveform = ({ isPlaying }: { isPlaying: boolean }) => (
  <div className="flex items-center gap-1 h-8">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className={`w-1 bg-neon-gradient rounded-full ${
          isPlaying ? 'animate-equalizer' : 'h-2'
        }`}
        style={{
          animationDelay: `${i * 0.1}s`,
          animationDuration: `${0.5 + i * 0.1}s`
        }}
      />
    ))}
  </div>
);

const CryptoIcon = ({ type, className }: { type: 'ETH' | 'SUI'; className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="w-8 h-8 rounded-full bg-crypto-gradient flex items-center justify-center text-white font-orbitron font-bold text-sm animate-crypto-pulse">
      {type}
    </div>
  </div>
);

const DeFiMusicSwap = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<'ETH' | 'SUI'>('ETH');
  const [amount, setAmount] = useState('');
  const [isSwapping, setIsSwapping] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [conversionRate] = useState(250);
  const [isHovering, setIsHovering] = useState(false);

  const songData = {
    title: "Neon Dreams",
    artist: "CyberBeats",
    description: "A futuristic electronic anthem that captures the essence of digital rebellion and crypto revolution.",
    priceETH: 0.1,
    priceSUI: 25,
    totalShares: 10000,
    ownedShares: 0
  };

  const handleAmountChange = (value: string) => {
    if (/^\d*\.?\d*$/.test(value) || value === '') {
      setAmount(value);
    }
  };

  const getConvertedAmount = () => {
    if (!amount) return '';
    const numAmount = parseFloat(amount);
    if (selectedCurrency === 'ETH') {
      return (numAmount * conversionRate).toFixed(2);
    } else {
      return (numAmount / conversionRate).toFixed(4);
    }
  };

  const handleConfirmPurchase = () => {
    if (!amount || parseFloat(amount) <= 0) return;
    
    setIsSwapping(true);
    
    setTimeout(() => {
      setIsSwapping(false);
      setIsSuccess(true);
    }, 2500);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setAmount('');
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-mesh-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background"></div>
        <div className="relative flex items-center justify-center min-h-screen p-4">
          <Card className="w-full max-w-md p-8 text-center bg-glass border border-crypto-purple/30 backdrop-blur-xl animate-fade-in shadow-glow-lg">
            <div className="mb-8">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute inset-0 rounded-full bg-neon-gradient animate-crypto-pulse"></div>
                <div className="relative w-full h-full rounded-full bg-muted/20 flex items-center justify-center animate-checkmark">
                  <Check className="w-12 h-12 text-neon-green animate-neon-glow" />
                </div>
              </div>
              <h2 className="text-3xl font-orbitron font-bold bg-neon-gradient bg-clip-text text-transparent mb-3">
                Investment Successful!
              </h2>
              <p className="text-muted-foreground font-inter">You now own shares in this revolutionary track.</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-lg bg-muted/10 border border-crypto-blue/30">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Shares Acquired:</span>
                  <span className="font-orbitron text-crypto-blue font-bold">
                    {(parseFloat(amount || '0') / (selectedCurrency === 'ETH' ? songData.priceETH : songData.priceSUI)).toFixed(0)}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button 
                onClick={handleReset} 
                className="w-full bg-neon-gradient hover:opacity-90 font-orbitron font-bold shadow-neon transition-all duration-300 hover:scale-105"
              >
                <Music className="w-4 h-4 mr-2" />
                Explore More Songs
              </Button>
              <Button 
                variant="outline" 
                onClick={handleReset} 
                className="w-full border-crypto-purple/50 text-crypto-purple hover:bg-crypto-purple/10 font-inter"
              >
                Go Back
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mesh-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background"></div>
      
      {/* Floating elements for ambiance */}
      <div className="absolute top-20 left-10 animate-float">
        <Zap className="w-6 h-6 text-neon-green opacity-20" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <TrendingUp className="w-8 h-8 text-crypto-blue opacity-20" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <DollarSign className="w-7 h-7 text-neon-pink opacity-20" />
      </div>

      <div className="relative flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-8">
          {/* Song Section */}
          <Card 
            className="p-8 bg-glass border border-crypto-purple/30 backdrop-blur-xl animate-slide-up shadow-glow-lg transition-all duration-500 hover:shadow-glow-lg hover:scale-[1.02]"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="space-y-6">
              <div className="relative group">
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-crypto-blue/30 shadow-glow">
                  <img 
                    src={songCover} 
                    alt="Song Cover" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-crypto-gradient/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="absolute top-4 right-4 animate-float">
                  <Headphones className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <AudioWaveform isPlaying={isHovering} />
                  <Music className="w-5 h-5 text-crypto-blue animate-neon-glow" />
                </div>
                
                <div>
                  <h1 className="text-3xl font-orbitron font-bold bg-neon-gradient bg-clip-text text-transparent mb-2">
                    {songData.title}
                  </h1>
                  <p className="text-xl text-crypto-blue font-inter font-medium">{songData.artist}</p>
                </div>
                
                <p className="text-muted-foreground font-inter leading-relaxed">{songData.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-crypto-purple/10 border border-crypto-purple/30 animate-glow-pulse">
                    <h3 className="text-sm font-orbitron font-medium text-crypto-purple mb-2">Share Price</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-inter">{songData.priceETH} ETH</span>
                        <CryptoIcon type="ETH" />
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-crypto-blue font-inter">≈ {songData.priceSUI} SUI</span>
                        <CryptoIcon type="SUI" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-crypto-blue/10 border border-crypto-blue/30">
                    <h3 className="text-sm font-orbitron font-medium text-crypto-blue mb-2">Market Data</h3>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total Shares:</span>
                        <span className="font-orbitron">{songData.totalShares.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Rate:</span>
                        <span className="font-orbitron">1 ETH = {conversionRate} SUI</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Investment Section */}
          <Card className="p-8 bg-glass border border-crypto-blue/30 backdrop-blur-xl animate-slide-up shadow-glow-lg" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-orbitron font-bold bg-crypto-gradient bg-clip-text text-transparent mb-2">
                  Invest in Shares
                </h2>
                <p className="text-muted-foreground font-inter">Join the DeFi music revolution</p>
              </div>
              
              {/* Currency Toggle */}
              <div className="space-y-4">
                <label className="text-sm font-orbitron font-medium text-crypto-purple">Payment Method</label>
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    variant={selectedCurrency === 'ETH' ? 'default' : 'outline'}
                    onClick={() => setSelectedCurrency('ETH')}
                    className={`h-14 font-orbitron font-bold transition-all duration-300 ${
                      selectedCurrency === 'ETH' 
                        ? 'bg-crypto-gradient shadow-glow animate-crypto-pulse' 
                        : 'border-crypto-purple/50 hover:border-crypto-purple hover:bg-crypto-purple/10'
                    }`}
                    disabled={isSwapping}
                  >
                    <CryptoIcon type="ETH" className="mr-2" />
                    Ethereum
                  </Button>
                  <Button 
                    variant={selectedCurrency === 'SUI' ? 'default' : 'outline'}
                    onClick={() => setSelectedCurrency('SUI')}
                    className={`h-14 font-orbitron font-bold transition-all duration-300 ${
                      selectedCurrency === 'SUI' 
                        ? 'bg-crypto-gradient shadow-glow animate-crypto-pulse' 
                        : 'border-crypto-blue/50 hover:border-crypto-blue hover:bg-crypto-blue/10'
                    }`}
                    disabled={isSwapping}
                  >
                    <CryptoIcon type="SUI" className="mr-2" />
                    Sui Network
                  </Button>
                </div>
              </div>

              {/* Amount Input */}
              <div className="space-y-4">
                <label className="text-sm font-orbitron font-medium text-crypto-blue">
                  Investment Amount ({selectedCurrency})
                </label>
                <div className="relative">
                  <Input
                    type="text"
                    value={amount}
                    onChange={(e) => handleAmountChange(e.target.value)}
                    placeholder={`Enter ${selectedCurrency} amount`}
                    className="h-14 pl-12 bg-muted/20 border-crypto-blue/30 font-inter text-lg focus:border-crypto-blue focus:ring-crypto-blue/20 transition-all duration-300"
                    disabled={isSwapping}
                  />
                  <CryptoIcon type={selectedCurrency} className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
                {amount && (
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/10 border border-crypto-purple/20">
                    <span className="text-sm text-muted-foreground font-inter">Equivalent Amount:</span>
                    <span className="font-orbitron text-crypto-blue font-bold">
                      {getConvertedAmount()} {selectedCurrency === 'ETH' ? 'SUI' : 'ETH'}
                    </span>
                  </div>
                )}
              </div>

              {/* Swap Animation */}
              {isSwapping && (
                <div className="flex justify-center items-center py-12">
                  <div className="relative">
                    <ArrowLeftRight className="w-12 h-12 text-crypto-blue animate-swap-slide" />
                    <div className="absolute inset-0 animate-glow-pulse rounded-full"></div>
                    <div className="absolute -inset-4">
                      <div className="w-20 h-20 border-2 border-crypto-purple/30 rounded-full animate-spin"></div>
                    </div>
                  </div>
                </div>
              )}

              {/* Confirm Button */}
              <Button 
                onClick={handleConfirmPurchase}
                disabled={!amount || parseFloat(amount) <= 0 || isSwapping}
                className="w-full h-14 bg-neon-gradient hover:opacity-90 disabled:opacity-50 font-orbitron font-bold text-lg shadow-neon transition-all duration-300 hover:scale-[1.02] disabled:hover:scale-100"
              >
                {isSwapping ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Processing Swap...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5 mr-2" />
                    Confirm Purchase
                  </>
                )}
              </Button>
              
              {amount && (
                <div className="p-6 rounded-xl bg-gradient-to-r from-crypto-purple/10 to-crypto-blue/10 border border-crypto-purple/30 space-y-3 animate-glow-pulse">
                  <h4 className="text-sm font-orbitron font-bold text-crypto-purple mb-3">Transaction Summary</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground font-inter">Investment Amount:</span>
                      <span className="font-orbitron font-bold text-foreground">{amount} {selectedCurrency}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground font-inter">Shares to Acquire:</span>
                      <span className="font-orbitron font-bold text-crypto-blue">
                        {(parseFloat(amount || '0') / (selectedCurrency === 'ETH' ? songData.priceETH : songData.priceSUI)).toFixed(0)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground font-inter">Ownership %:</span>
                      <span className="font-orbitron font-bold text-neon-green">
                        {((parseFloat(amount || '0') / (selectedCurrency === 'ETH' ? songData.priceETH : songData.priceSUI)) / songData.totalShares * 100).toFixed(3)}%
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DeFiMusicSwap;