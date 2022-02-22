import{sortingData} from './';

global.fetch=jest.fn(()=>

  Promise.resolve({

    json:()=>Promise.resolve(),
  }),
);

beforeEach(()=>{
  fetch.mockClear();
});

describe('sortingData',() =>{

  beforeEach(()=>{
    fetch.mockImplementationOnce(()=>Promise.resolve({
      json: () => Promise.resolve([
        {
          'category':'electronics', 'price':599,
        },
        {
          'category':'electronics', 'price':999.99,
        },
      ]),
    }));
  });

  test('sortingData',async() => {
    const result = await sortingData();

    expect(result).toEqual([
      {
        'category':'electronics', 'price':599,
      },
      {
        'category':'electronics', 'price':999.99,
      },
    ]);
  });

  test('fetch should be called once with https://fakestoreapi.com/products', async()=>{
    
    await sortingData();
    
    expect(fetch).toHaveBeenCalledTimes(1);

    expect(fetch).toHaveBeenCalledWith(
      'https://fakestoreapi.com/products',
    );
  });

});

