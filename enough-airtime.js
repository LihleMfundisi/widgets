function enoughAirtime (usage, airtime){ 
    var record = usage.split(',');
    let bill = 0;
    const call = 1.88;
    const sms = 0.75;
    const data = 12.00;
    
    for (i=0; i<record.length; i++) {
      if (record[i] === 'call') {
        bill = bill + call;
      } x-data
      else if (record[i] === 'sms') {
        bill = bill + sms;
      }
    }
}