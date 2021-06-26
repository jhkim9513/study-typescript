{
  type PageInfo = {
    title: string;
  }
  type Page = 'home' | 'about' | 'contact';

  //하나의 타입과 다른 하나의 타입을 연결하고자 할 때 Record를 사용한다.
  const nav: Record<Page, PageInfo> = {
    home: { title: 'Home' },
    about: { title: 'About' },
    contact: { title: 'Contact' },
  };

  //
  type Product = 'cat' | 'dog';
  type NewProduct = Capitalize<Product>; // 'Cat' | 'Dog'
}