import { useSelector, useDispatch } from 'react-redux';

import { selectFilters } from '../store/filters/filters-selectors';
import { removeFilter, clearFilter } from 'store/filters/filters-actions';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

const FilterPanel = () => {
  const dispatch = useDispatch();

  const badges = useSelector(selectFilters).map(filter => {
    return <Badge 
              key={filter} 
              onClear={() => dispatch(removeFilter(filter))} 
              variant="clearable">
           {filter}</Badge>
  });

  if (badges.length === 0) return null;

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          { badges }
        </Stack>

        <button className='link' onClick={() => dispatch(clearFilter)}>Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};