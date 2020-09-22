import React from 'react';
import config from '../../config';


export default function Footer() {
  return (
    <footer className="footer text-center">
      <div className="container">
        <ul className="list-inline mb-5">
          {config.socialLinks.map(social => {
            const { icon, name, url } = social;
            return (
              <li key={name} className="list-inline-item">
                <a
                  href={url}
                  className="social-link rounded-circle text-white mr-3"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <div>
          <a id="Contact" href="mailto:estherurzanqui81@gmail.com" className="btn btn-lg btn-light mr-4">
            Email me
          </a>
        </div>
        <br>
        </br>
        <br>
        </br>
        <p className="text-muted small mb-0">
          Copyright &copy; Gatsby Starter Stylish
        </p>
      </div>
    </footer>
  );
}
