import dns from 'dns';

const srvRecord = '_mongodb._tcp.cluster0.na253br.mongodb.net';

dns.resolveSrv(srvRecord, (err, addresses) => {
  if (err) {
    console.error('❌ DNS SRV RESOLUTION FAILED:', err.message);
    process.exit(1);
  }
  console.log('✅ DNS SRV RESOLVED SUCCESSFULLY:');
  console.log(JSON.stringify(addresses, null, 2));
});
