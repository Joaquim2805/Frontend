export function generateRandomData(numBins, minValue, maxValue) {
    const binWidth = (maxValue - minValue) / numBins;
    const data = [];
  
    for (let i = 0; i < numBins; i++) {
      // Générez une valeur aléatoire dans la plage du bin
      const randomValue = Math.random() * (10000 - 0) + 0 ;
      data.push(randomValue);
    }
  
    return data;
  }
  
  const numBins = 8192; // Nombre de bins
  const minValue = 0; // Valeur minimale
  const maxValue = 8192; // Valeur maximale
  
  const randomData = generateRandomData(numBins, minValue, maxValue);
  