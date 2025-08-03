import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Check, ArrowLeftRight } from 'lucide-react';
import songCover from '@/assets/song-cover.jpg';

const DeFiMusicSwap = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<'ETH' | 'SUI'>('ETH');
  const [amount, setAmount] = useState('');
  const [isSwapping, setIsSwapping] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [conversionRate] = useState(250); // 1 ETH = 250 SUI

  const songData = {
    title: "Neon Dreams",
    artist: "CyberBeats",
    description: "A futuristic electronic anthem that captures the essence of digital rebellion.",
    priceETH: 0.1,
    priceSUI: 25
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
    }, 2000);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setAmount('');
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 text-center bg-glass border-glass-border backdrop-blur-xl animate-fade-in">
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-crypto-gradient flex items-center justify-center animate-checkmark">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-2">Investment Successful!</h2>
            <p className="text-muted-foreground">You now own shares in this song.</p>
          </div>
          
          <div className="space-y-3">
            <Button onClick={handleReset} className="w-full bg-crypto-gradient hover:opacity-90">
              Explore More Songs
            </Button>
            <Button variant="outline" onClick={handleReset} className="w-full">
              Go Back
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
        {/* Song Section */}
        <Card className="p-6 bg-glass border-glass-border backdrop-blur-xl animate-fade-in">
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src={songCover} 
                alt="Song Cover" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">{songData.title}</h1>
              <p className="text-lg text-accent font-medium">{songData.artist}</p>
              <p className="text-muted-foreground">{songData.description}</p>
            </div>
            
            <div className="p-4 rounded-lg bg-muted/20 border border-border/50">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Share Price</h3>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-foreground">{songData.priceETH} ETH</span>
                  <span className="text-accent">≈ {songData.priceSUI} SUI</span>
                </div>
                <p className="text-xs text-muted-foreground">1 ETH ≈ {conversionRate} SUI</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Investment Section */}
        <Card className="p-6 bg-glass border-glass-border backdrop-blur-xl animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">Invest in Shares</h2>
            
            {/* Currency Toggle */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-muted-foreground">Pay with</label>
              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant={selectedCurrency === 'ETH' ? 'default' : 'outline'}
                  onClick={() => setSelectedCurrency('ETH')}
                  className={selectedCurrency === 'ETH' ? 'bg-crypto-gradient' : ''}
                  disabled={isSwapping}
                >
                  ETH
                </Button>
                <Button 
                  variant={selectedCurrency === 'SUI' ? 'default' : 'outline'}
                  onClick={() => setSelectedCurrency('SUI')}
                  className={selectedCurrency === 'SUI' ? 'bg-crypto-gradient' : ''}
                  disabled={isSwapping}
                >
                  SUI
                </Button>
              </div>
            </div>

            {/* Amount Input */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-muted-foreground">
                Amount ({selectedCurrency})
              </label>
              <Input
                type="text"
                value={amount}
                onChange={(e) => handleAmountChange(e.target.value)}
                placeholder={`Enter ${selectedCurrency} amount`}
                className="bg-muted/20 border-border/50"
                disabled={isSwapping}
              />
              {amount && (
                <p className="text-sm text-muted-foreground">
                  ≈ {getConvertedAmount()} {selectedCurrency === 'ETH' ? 'SUI' : 'ETH'}
                </p>
              )}
            </div>

            {/* Swap Animation */}
            {isSwapping && (
              <div className="flex justify-center items-center py-8">
                <div className="relative">
                  <ArrowLeftRight className="w-8 h-8 text-accent animate-swap-slide" />
                  <div className="absolute inset-0 animate-pulse-glow rounded-full"></div>
                </div>
              </div>
            )}

            {/* Confirm Button */}
            <Button 
              onClick={handleConfirmPurchase}
              disabled={!amount || parseFloat(amount) <= 0 || isSwapping}
              className="w-full bg-crypto-gradient hover:opacity-90 disabled:opacity-50"
            >
              {isSwapping ? 'Processing Swap...' : 'Confirm Purchase'}
            </Button>
            
            {amount && (
              <div className="p-4 rounded-lg bg-muted/20 border border-border/50">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Transaction Summary</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Amount:</span>
                    <span>{amount} {selectedCurrency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shares:</span>
                    <span>{(parseFloat(amount || '0') / (selectedCurrency === 'ETH' ? songData.priceETH : songData.priceSUI)).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DeFiMusicSwap;