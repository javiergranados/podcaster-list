import React from 'react'

export function Footer() {
  return (
    <footer className="footer h-20 w-screen bg-primary p-4 text-primary-content transition-all dark:bg-neutral dark:text-neutral-content">
      <div className="flex w-full items-center justify-between">
        <p className="text-xs dark:opacity-50 sm:text-base">© {new Date().getFullYear()} Javier Granados</p>
        <a
          className="btn btn-link text-primary-content hover:opacity-50 dark:text-neutral-content dark:opacity-50 dark:hover:opacity-100"
          href="mailto:hola@javiergranados.dev"
        >
          <svg className="h-8 w-8" viewBox="0 0 20 18">
            <path
              fill="currentColor"
              d="M16.999,4.975L16.999,4.975C16.999,4.975,16.999,4.975,16.999,4.975c-0.419-0.4-0.979-0.654-1.604-0.654H4.606c-0.584,0-1.104,0.236-1.514,0.593C3.076,4.928,3.05,4.925,3.037,4.943C3.034,4.945,3.035,4.95,3.032,4.953C2.574,5.379,2.276,5.975,2.276,6.649v6.702c0,1.285,1.045,2.329,2.33,2.329h10.79c1.285,0,2.328-1.044,2.328-2.329V6.649C17.724,5.989,17.441,5.399,16.999,4.975z M15.396,5.356c0.098,0,0.183,0.035,0.273,0.055l-5.668,4.735L4.382,5.401c0.075-0.014,0.145-0.045,0.224-0.045H15.396z M16.688,13.351c0,0.712-0.581,1.294-1.293,1.294H4.606c-0.714,0-1.294-0.582-1.294-1.294V6.649c0-0.235,0.081-0.445,0.192-0.636l6.162,5.205c0.096,0.081,0.215,0.122,0.334,0.122c0.118,0,0.235-0.041,0.333-0.12l6.189-5.171c0.099,0.181,0.168,0.38,0.168,0.6V13.351z"
            ></path>
          </svg>
        </a>
      </div>
    </footer>
  )
}
