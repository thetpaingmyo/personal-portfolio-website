import './Skill.css'

const Skill = ({ skill }) => {
  return (
    <div className='skills__list'>
      <small>
        <strong>
          {skill.name}
          <span className='skills__tag'>{skill.percentage}%</span>
        </strong>
      </small>
      <div className='skills__bar'>
        <div className={`skills__${skill.name}`}></div>
      </div>
    </div>
  )
}

export default Skill
