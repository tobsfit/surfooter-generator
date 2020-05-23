document.querySelector('#base').addEventListener('change', (e) => {
  let content: string;
  const switcher: HTMLElement = e.target;
  if (switcher.value == 1) {
    content = `<object data="https://tobsfit.github.io/surfooter-generator/simple-surfooter.html"></object>`;
  } else {
    content = `
      <section class="surfooter">
        <div class="col-sm-12" data-editable="">
          <h3>Lorem ipsum dolor sit amet</h3>
          <h4>Quam lacus suspendisse faucibus interdum posuere lorem</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.</p>
        </div>

        <div class="col-sm-12">
          <div class="row">
            <!-- col-3 -->
            <div class="col-sm-3" data-editable="">
              <h5>Lorem ipsum dolor sit amet</h5>
              <div class="image" data-editable-image="">
                <img class="img-responsive" alt="surfooter image" src="https://via.placeholder.com/150/0082c3/FFFFFF">
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur <strong><a href="#">tempor</a></strong> oder
                <strong><a href="#">quis</a></strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip exea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu
                fugiat nulla pariatur. <strong><a href="#">Duis</a></strong>,<strong><a
                    href="#">voluptate</a></strong>.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip exea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu
                fugiat nulla pariatur. <strong><a href="#">Duis</a></strong>.
              </p>
            </div>
            <!-- col-3 -->
            <div class="col-sm-3" data-editable="">
              <h5>Lorem ipsum dolor sit amet</h5>
              <div class="image" data-editable-image="">
                <img class="img-responsive" alt="surfooter image" src="https://via.placeholder.com/150/0082c3/FFFFFF">
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur <strong><a href="#">tempor</a></strong> oder
                <strong><a href="#">quis</a></strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip exea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu
                fugiat nulla pariatur. <strong><a href="#">Duis</a></strong>,<strong><a
                    href="#">voluptate</a></strong>.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip exea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu
                fugiat nulla pariatur. <strong><a href="#">Duis</a></strong>.
              </p>
            </div>
            <!-- col-3 -->
            <div class="col-sm-3" data-editable="">
              <h5>Lorem ipsum dolor sit amet</h5>
              <div class="image" data-editable-image="">
                <img class="img-responsive" alt="surfooter image" src="https://via.placeholder.com/150/0082c3/FFFFFF">
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur <strong><a href="#">tempor</a></strong> oder
                <strong><a href="#">quis</a></strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip exea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu
                fugiat nulla pariatur. <strong><a href="#">Duis</a></strong>,<strong><a
                    href="#">voluptate</a></strong>.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip exea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu
                fugiat nulla pariatur. <strong><a href="#">Duis</a></strong>.
              </p>
            </div>
            <!-- col-3 -->
            <div class="col-sm-3" data-editable="">
              <h5>Lorem ipsum dolor sit amet</h5>
              <div class="image" data-editable-image="">
                <img class="img-responsive" alt="surfooter image" src="https://via.placeholder.com/150/0082c3/FFFFFF">
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur <strong><a href="#">tempor</a></strong> oder
                <strong><a href="#">quis</a></strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip exea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu
                fugiat nulla pariatur. <strong><a href="#">Duis</a></strong>,<strong><a
                    href="#">voluptate</a></strong>.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip exea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu
                fugiat nulla pariatur. <strong><a href="#">Duis</a></strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
      `
  }
  document.querySelector('#clipboard').innerHTML = content
});