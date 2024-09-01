import { BiRightArrow } from "react-icons/bi";

export default function Page() {
  return <div>
    <div className="container">
      <section>
        <div className="content">
          <div className="content-inner">
            <div className="top-content">
              <h1 className="text-5xl pb-4">Profile</h1>
              <h3>Kiyona Tracy</h3>
              <p>Fullstack Web Developer from Japan</p>
            </div>
            <ul className="menu">
              <li><a href="../">Home</a></li>
              <li><BiRightArrow className="icon-s mr-2"/><a href="#">Profile</a></li>
              <li>Skills</li>
              <li>Works</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
}