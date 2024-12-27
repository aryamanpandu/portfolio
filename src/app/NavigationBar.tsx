export default function NavigationBar() {
  return (
    <nav>
      <ul className="flex justify-between items-center p-2">
        <li className="p-4 border-2 rounded-xl">
          <a href="#">Aryaman Pandey</a>
        </li>
        <div className="flex space-x-4">
          <li className="p-4 border-2 rounded-xl">
            <a href="About">About Me</a>
          </li>
          <li className="p-4 border-2 rounded-xl">
            <a href="Work">Work</a>
          </li>
          <li className="p-4 border-2 rounded-xl">
            <a href="Projects">Projects</a>
          </li>
          <li className="p-4 border-2 rounded-xl">
            <a href="Contact">Contact Me</a>
          </li>
          <li className="p-4 border-2 rounded-xl">
            <a href="Resume">Resume</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
