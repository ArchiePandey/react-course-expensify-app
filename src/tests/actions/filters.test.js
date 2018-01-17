import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from "../../actions/filters";
import moment from 'moment';
test('should setup setTextFilter action object', () => {
    const action = setTextFilter('rent');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'rent'
    })
});

test('should setup setTextFilter action object', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
});

test('should setup sortByAmount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT',
        text:'amount'
    })
});

test('should setup sortByDate action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE',
        text:'date'
    })
});

test('should setup setStartDate action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    })
});

test('should setup setEndDate action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
});
