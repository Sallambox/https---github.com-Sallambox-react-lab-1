import React from 'react'

export class Footer  extends React.Component{
    render() {
        return (
            <div className="container p-2">
               <footer class="bg-dark text-center text-white">
  <div class="container p-4 pb-0">
    <section class="mb-4">
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="bi bi-facebook"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="bi bi-twitter"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="bi bi-google"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="bi bi-instagram"></i
      ></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="bi bi-linkedin" aria-hidden="true"></i></a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="bi bi-github"></i></a>
    </section>
  </div>

  <div class="text-center p-3">
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</footer>
            </div>

        )
    }
}