import Star from "../Star/Star";

function Stars({count})
{
    return(
        <ul class="card-body-stars">
            {(count > 0) && (count <= 5) && Stars.map(count => <li>Star</li>);}
        </ul>
    )

    Stars.defaultProps = {
        count: 0;
    }
    
    Stars.PropTypes = {
        count: PropTypes.number;
    }
}

export default Stars;