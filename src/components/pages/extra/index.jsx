import './extra.scss';
import PageTitle from '../../common/pageTitle';
import LearningQueue from './components/LearningQueue';
import ExtraGroup from './components/ExtraGroup';
import { LasagnaLove, Singing, BeachVolleyball } from '../../../lib/strings';

const Extra = () => {
    return (
        <>
        <PageTitle id="extra" title="A bit extra" caption="In my free time, I..." />
        <div className='extra-section'>
            <div className='extra-section_left'>
                <ExtraGroup {...LasagnaLove} />
                <ExtraGroup {...Singing} />
                <ExtraGroup {...BeachVolleyball} />
            </div>
            <div className='extra-section_right'>
            <LearningQueue />
            </div>
        </div>
            

        </>
    )
}

export default Extra;