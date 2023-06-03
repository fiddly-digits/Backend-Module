const fs = require('fs/promises');

const readFile = async () => {
  try {
    const contents = await fs.readFile('./message.txt', 'utf8');
    console.log(contents);
  } catch (err) {
    console.log(err.message);
  }
};

readFile();
