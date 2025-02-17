import Link from 'next/link';
  export default function Page() {
      return(
        <div>
          <div className="flex flex-row items-center justify-center h-[10vh] border-b border-white">
            <Link href="/">
              <img src="logo.png" className="m-5 h-8" />
            </Link>
            <Link href="/" className="m-5">
              Home
            </Link>
            <Link href="/page1" className="m-5">
              Page1
            </Link>
            <Link href="/page2" className="m-5">
              Page2
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="m-5 text-2xl">Productos</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-center">
              <img src="lacabra.jpg" className='h-40'/>
              <p className="m-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper ultrices neque eget finibus. Sed iaculis enim urna, 
          eget aliquet velit congue et. Curabitur bibendum tincidunt euismod. Proin accumsan iaculis lorem sed varius. Praesent tincidunt orci 
          quis lacus bibendum, a pulvinar dolor convallis. Morbi finibus laoreet leo, id ullamcorper urna consectetur et. Mauris eget mauris 
          dignissim eros accumsan pulvinar. Nulla ultrices sagittis suscipit. Aliquam consequat elit ac lectus bibendum, 
          eu sodales elit tincidunt. Nunc sit amet facilisis orci. Suspendisse malesuada tincidunt turpis id luctus. Proin facilisis metus 
          elementum, lobortis diam nec, fermentum dolor. Aliquam fringilla malesuada felis, quis gravida lectus vestibulum eget. 
          Aliquam erat volutpat. Phasellus eleifend tristique nibh, sit amet pulvinar sapien posuere non.</p>
            </div>
            <div className="flex flex-row items-center justify-center">
              <p className="m-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper ultrices neque eget finibus. Sed iaculis enim urna, 
          eget aliquet velit congue et. Curabitur bibendum tincidunt euismod. Proin accumsan iaculis lorem sed varius. Praesent tincidunt orci 
          quis lacus bibendum, a pulvinar dolor convallis. Morbi finibus laoreet leo, id ullamcorper urna consectetur et. Mauris eget mauris 
          dignissim eros accumsan pulvinar. Nulla ultrices sagittis suscipit. Aliquam consequat elit ac lectus bibendum, 
          eu sodales elit tincidunt. Nunc sit amet facilisis orci. Suspendisse malesuada tincidunt turpis id luctus. Proin facilisis metus 
          elementum, lobortis diam nec, fermentum dolor. Aliquam fringilla malesuada felis, quis gravida lectus vestibulum eget. 
          Aliquam erat volutpat. Phasellus eleifend tristique nibh, sit amet pulvinar sapien posuere non.</p>
              <img src="lacabra.jpg" className='h-40'/>
            </div>
            <div className="flex flex-row items-center justify-center">
              <img src="lacabra.jpg" className='h-40'/>
              <p className="m-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper ultrices neque eget finibus. Sed iaculis enim urna, 
          eget aliquet velit congue et. Curabitur bibendum tincidunt euismod. Proin accumsan iaculis lorem sed varius. Praesent tincidunt orci 
          quis lacus bibendum, a pulvinar dolor convallis. Morbi finibus laoreet leo, id ullamcorper urna consectetur et. Mauris eget mauris 
          dignissim eros accumsan pulvinar. Nulla ultrices sagittis suscipit. Aliquam consequat elit ac lectus bibendum, 
          eu sodales elit tincidunt. Nunc sit amet facilisis orci. Suspendisse malesuada tincidunt turpis id luctus. Proin facilisis metus 
          elementum, lobortis diam nec, fermentum dolor. Aliquam fringilla malesuada felis, quis gravida lectus vestibulum eget. 
          Aliquam erat volutpat. Phasellus eleifend tristique nibh, sit amet pulvinar sapien posuere non.</p>
            </div>
          </div>
        </div>
      );
    }  