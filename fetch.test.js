const getCurrent = require("./fetch");

it('returns the data', async () => {
    const data = await getCurrent();
    expect(data).toEqual('');
})

  //trycatch