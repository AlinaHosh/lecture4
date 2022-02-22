import{merge} from './';

global.fetch=jest.fn(()=>

  Promise.resolve({

    json:()=>Promise.resolve(),
  }),
);

beforeEach(()=>{
  fetch.mockClear();
});

describe('merge',() =>{

  beforeEach(()=>{
    fetch.mockImplementationOnce(()=>Promise.resolve({
      json: () => Promise.resolve([
        {
          'id':1,'name':'Leanne Graham',
        },
      ]),
    }));
  });
  
  fetch.mockImplementationOnce(()=>Promise.resolve({
    json: () => Promise.resolve([
      {
        'completed':true,'userId':1,
      },
    ]),
  }));


  test('fetch should be called 2 times', async()=>{
    await merge();
    
    expect(fetch).toHaveBeenCalledTimes(2);

    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users',
    );

    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/todos',
    );
  });

});