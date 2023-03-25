import Star from "../Star/Star";

function Stars({count})
{   
    if((count > 0) && (count <= 5))
        return null;
    
    return(
        Stars.map(count =>
            <ul class="card-body-stars">
                <li>Star</li>
            </ul>
        );
    );

    Stars.defaultProps = {
        count: 0;
    }
    
    Stars.PropTypes = {
        count: PropTypes.number;
    }
}

export default Stars;