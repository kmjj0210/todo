import React from 'react';

export default function List({tab}) {
  return (
    <div className='list'>
      <div className="form-wrap">
        <input id='chk1' type="checkbox"/>
        <label htmlFor="chk1">할일1</label>
      </div>
      <div className="form-wrap">
        <input id='chk2' type="checkbox" defaultChecked />
        <label htmlFor="chk2">할일2</label>
      </div>
      <div className="form-wrap">
        <input id='chk3' type="checkbox" defaultChecked/>
        <label htmlFor="chk3">할일3</label>
      </div>
      <div className="form-wrap">
        <input id='chk4' type="checkbox"/>
        <label htmlFor="chk4">할일4</label>
      </div>
      <div className="form-wrap">
        <input id='chk5' type="checkbox" defaultChecked/>
        <label htmlFor="chk5">할일5</label>
      </div>
    </div>
  );
}

