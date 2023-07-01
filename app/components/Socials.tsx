interface SocialsProps {
  className: string;
}
const Socials = ({ className }: SocialsProps) => (
  <section className={className}>
    <ul>
      <li>
        <a
          className='social-icon'
          href='https://github.com/jeremyMLtz'
          target='_blank'
          rel='noopener noreferrer'>
          <i className='fa-brands fa-github fa-2xl'></i>
        </a>
      </li>
      <li>
        <a
          className='social-icon'
          href='https://www.linkedin.com/in/jeremy-lentz-1321a7b1/'
          target='_blank'
          rel='noopener noreferrer'>
          <i className='fa-brands fa-linkedin fa-2xl'></i>
        </a>
      </li>
      <li>
        <a
          className='social-icon'
          href='https://www.instagram.com/jeremy_ltz/'
          target='_blank'
          rel='noopener noreferrer'>
          <i className='fa-brands fa-instagram fa-2xl'></i>
        </a>
      </li>
    </ul>
  </section>
);
export default Socials;
