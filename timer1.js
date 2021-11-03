let seconds = process.argv.slice(2);

for (let i = 0; i < seconds.length; i++) {
  const timer = seconds[i] * 1000;

  if (timer > 0) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, timer);
  }
}
