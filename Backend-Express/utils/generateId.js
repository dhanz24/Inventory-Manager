
const generateId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const date = new Date();
    const isoString = date.toISOString();
    const charactersLength = characters.length;
    let id =  isoString.replace(/\D/g, '');
    for ( let i = 0; i < 3; i++ ) {
        id += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
    
    console.log('ini fn generateId', id);
    return id;
};

const generateIdBrg = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = 'BRG';
    const charactersLength = characters.length;
    for ( let i = 0; i < 4; i++ ) {
      id += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return id;
  };

module.exports = { generateId, generateIdBrg };
