import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import { randomColor } from '../../helpers/randomColor/randomColor';

export default function Statistics({ title, stats }) {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}

            <ul className={s.statList}>
                {stats.map(stat => (
                    <li className={s.item} key={stat.id}
                        style={{ backgroundColor: randomColor() }}>
                        <span className={s.label}>{stat.label}</span>
                        <span className={s.percentage}>{stat.percentage}%</span>
                    </li>
                ))
                }
            </ul>
        </section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};