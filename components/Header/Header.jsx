import Link from "next/link";

function Header({ navLinks }) {
  return (
    <div>
      <nav className="nav">
        {/* Logo */}
        <svg viewBox="0 0 2298.41 170.62">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                className="cls-1"
                d="M0,73.72v-.38C0,36.1,28.5,4.56,68.59,4.56,91.77,4.56,106,11,119.7,22.61L104.88,40.28C94.62,31.54,84.55,26,67.64,26,43.13,26,24.51,47.5,24.51,73v.38c0,27.36,18.05,47.5,45.22,47.5,12.54,0,23.94-4,32.11-10.07V85.88h-34V65.55h56.62v55.86A84.8,84.8,0,0,1,69,142.12C27.36,142.12,0,112.48,0,73.72Z"
              />
              <path
                className="cls-1"
                d="M152.19,39.52h23V62.13c6.27-15,17.86-25.27,35.53-24.51V61.94h-1.33c-20.14,0-34.2,13.11-34.2,39.71v38.19h-23Z"
              />
              <path
                className="cls-1"
                d="M231,2.28h24.7V24.13H231Zm1,37.24h23V139.84H232Z"
              />
              <path
                className="cls-1"
                d="M290.13,59.28H277.4V40.09h12.73V32.68c0-11,2.85-19.38,8.17-24.7S311,0,320.91,0a61.51,61.51,0,0,1,18.62,2.66V22A40.39,40.39,0,0,0,326,19.57c-8.74,0-13.3,4.75-13.3,15.2v5.51h26.6v19H313.12v80.56h-23Zm71.44,0H348.84V40.09h12.73V32.68c0-11,2.85-19.38,8.17-24.7s12.73-8,22.61-8A61.51,61.51,0,0,1,411,2.66V22a40.39,40.39,0,0,0-13.49-2.47c-8.74,0-13.3,4.75-13.3,15.2v5.51h26.6v19H384.56v80.56h-23Zm66.69-57H453V24.13h-24.7Zm.95,37.24h23V139.84h-23Z"
              />
              <path
                className="cls-1"
                d="M482.22,39.52h23V54.91c6.46-9.31,15.77-17.48,31.35-17.48,22.61,0,35.72,15.2,35.72,38.38v64h-23v-57c0-15.58-7.79-24.51-21.47-24.51-13.3,0-22.61,9.31-22.61,24.89v56.62h-23Z"
              />
              <path
                className="cls-1"
                d="M659.67,6.84h98.61v20.9H683V62.32h66.69v20.9H683v35.72h76.19v20.9H659.67Z"
              />
              <path
                className="cls-1"
                d="M784.31,39.52h23V54.91c6.46-9.31,15.77-17.48,31.35-17.48,22.61,0,35.72,15.2,35.72,38.38v64h-23v-57c0-15.58-7.79-24.51-21.47-24.51-13.3,0-22.61,9.31-22.61,24.89v56.62h-23Z"
              />
              <path
                className="cls-1"
                d="M896.6,90.06v-.38c0-28.69,20.33-52.25,49-52.25,31.92,0,48.07,25.08,48.07,54,0,2.09-.19,4.18-.38,6.46H919.59c2.47,16.34,14.06,25.46,28.88,25.46,11.21,0,19.19-4.18,27.17-12l13.49,12c-9.5,11.4-22.61,18.81-41,18.81C919,142.12,896.6,121,896.6,90.06Zm74.29-7.41c-1.52-14.82-10.26-26.41-25.46-26.41-14.06,0-23.94,10.83-26,26.41Z"
              />
              <path
                className="cls-1"
                d="M1016.87,39.52h23V62.13c6.27-15,17.86-25.27,35.53-24.51V61.94h-1.33c-20.14,0-34.2,13.11-34.2,39.71v38.19h-23Z"
              />
              <path
                className="cls-1"
                d="M1298.07,73.72v-.38c0-37.81,28.31-68.78,68.59-68.78,24.51,0,39.33,8.55,52.06,20.71l-15,17.29c-10.64-9.88-22-16.53-37.24-16.53-25.27,0-43.89,20.9-43.89,46.93v.38c0,26,18.43,47.12,43.89,47.12,16.34,0,26.79-6.46,38.19-17.1l15,15.2c-13.87,14.44-29.07,23.56-54,23.56C1327,142.12,1298.07,111.91,1298.07,73.72Z"
              />
              <path
                className="cls-1"
                d="M1434.11,90.25v-.38c0-28.69,22.8-52.44,53.58-52.44s53.39,23.37,53.39,52.06v.38c0,28.5-22.8,52.25-53.77,52.25C1456.72,142.12,1434.11,118.75,1434.11,90.25Zm84,0v-.38c0-17.67-12.73-32.3-30.78-32.3-18.43,0-30.21,14.44-30.21,31.92v.38c0,17.48,12.73,32.11,30.59,32.11C1506.31,122,1518.09,107.54,1518.09,90.25Z"
              />
              <path
                className="cls-1"
                d="M1564.44,39.52h23V54.91c6.46-9.31,15.77-17.48,31.35-17.48,22.61,0,35.72,15.2,35.72,38.38v64h-23v-57c0-15.58-7.79-24.51-21.47-24.51-13.3,0-22.61,9.31-22.61,24.89v56.62h-23Z"
              />
              <path
                className="cls-1"
                d="M1674.07,126.73l10.26-15.58c11,8.17,22.61,12.35,32.87,12.35,9.88,0,15.58-4.18,15.58-10.83v-.38c0-7.79-10.64-10.45-22.42-14.06C1695.54,94.05,1679,88,1679,68.78V68.4c0-19,15.77-30.59,35.72-30.59,12.54,0,26.22,4.37,36.86,11.4l-9.12,16.34c-9.69-5.89-20-9.5-28.31-9.5-8.93,0-14.06,4.18-14.06,9.88v.38c0,7.41,10.83,10.45,22.61,14.25,14.63,4.56,31.16,11.21,31.16,29.26v.38c0,21.09-16.34,31.54-37.24,31.54A70.47,70.47,0,0,1,1674.07,126.73Z"
              />
              <path
                className="cls-1"
                d="M1776.29,103.36V39.52h23v57c0,15.58,7.79,24.32,21.47,24.32,13.3,0,22.61-9.12,22.61-24.7V39.52h23.18V139.84h-23.18V124.26c-6.46,9.5-15.77,17.67-31.35,17.67C1789.4,141.93,1776.29,126.73,1776.29,103.36Z"
              />
              <path className="cls-1" d="M1896.56,1.14h23v138.7h-23Z" />
              <path
                className="cls-1"
                d="M1954.32,112.1V59.28h-12.73V39.52h12.73V12h23V39.52h27V59.28h-27v49.21c0,8.93,4.56,12.54,12.35,12.54a30.9,30.9,0,0,0,14.25-3.42v18.81c-5.7,3.23-12,5.13-20.71,5.13C1966.29,141.55,1954.32,134.14,1954.32,112.1Z"
              />
              <path
                className="cls-1"
                d="M2028,2.28h24.7V24.13H2028Zm1,37.24h23V139.84h-23Z"
              />
              <path
                className="cls-1"
                d="M2082,39.52h23V54.91c6.46-9.31,15.77-17.48,31.35-17.48,22.61,0,35.72,15.2,35.72,38.38v64h-23v-57c0-15.58-7.79-24.51-21.47-24.51-13.3,0-22.61,9.31-22.61,24.89v56.62h-23Z"
              />
              <path
                className="cls-1"
                d="M2199.61,158.65l8.55-17.29C2219,148,2230.2,152,2243.88,152c20.52,0,31.73-10.64,31.73-30.78v-7.79c-8.36,10.83-18.81,18.43-35.34,18.43-23.56,0-45.6-17.48-45.6-46.93v-.38c0-29.64,22.23-47.12,45.6-47.12,16.91,0,27.36,7.79,35.15,17.1v-15h23v79.8c0,16.91-4.37,29.45-12.73,37.81-9.12,9.12-23.18,13.49-41.23,13.49C2227.92,170.62,2212.53,166.44,2199.61,158.65Zm76.19-73.91v-.38c0-16.34-13.49-27.55-29.45-27.55s-28.5,11-28.5,27.55v.38c0,16.34,12.73,27.55,28.5,27.55C2262.31,112.29,2275.8,101.08,2275.8,84.74Z"
              />
              <path
                className="cls-2"
                d="M1217.41,94.23V121c-13.71,11.62-32.57,21.14-57,21.14-41.53,0-70.1-29.14-70.1-68.58v-.38c0-37.91,29.53-69,69.91-69,24,0,38.48,6.48,52.39,18.29l-18.48,22.29c-10.28-8.58-19.43-13.53-34.86-13.53C1138,31.31,1121,50.17,1121,72.84v.38c0,24.38,16.76,42.29,40.39,42.29,10.66,0,20.19-2.67,27.62-8V94.21"
              />
              <path className="cls-3" d="M1217.41,88.53H1159.5V63.2h57.91" />
            </g>
          </g>
        </svg>
        {/* Burger */}

        {/* Menu */}
        <div className="group links">
          <Link href="/">
            <a className="link">Home</a>
          </Link>
          <Link href="/services">
            <a className="link">Services</a>
          </Link>
          <Link href="/portfolio">
            <a className="link">Portfolio</a>
          </Link>
          <Link href="/aboutus">
            <a className="link">About Us</a>
          </Link>
          <Link href="/latitudestudy">
            <a className="link">Latitude Study</a>
          </Link>
          <Link href="/contact">
            <a className="link">Contact</a>
          </Link>
          <Link href="/linkedin">
            <a className="link">Linkedin</a>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
