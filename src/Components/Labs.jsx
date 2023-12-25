import React, { useState } from 'react';

const Labs = () => {
  const [segmentName, setSegmentName] = useState('');
  const [selectedSchemas, setSelectedSchemas] = useState([]);
  const [newSchema, setNewSchema] = useState('');

  const schemaOptions = [
    { label: 'First Name', value: 'first_name' },
    { label: 'Last Name', value: 'last_name' },
    { label: 'Gender', value: 'gender' },
    { label: 'Age', value: 'age' },
    { label: 'Account Name', value: 'account_name' },
    { label: 'City', value: 'city' },
    { label: 'State', value: 'state' },
  ];

  const handleAddNewSchema = () => {
    if (newSchema && !selectedSchemas.find(schema => schema.value === newSchema)) {
      setSelectedSchemas([...selectedSchemas, { value: newSchema, label: newSchema }]);
      setNewSchema('');
    }
  };

  const handleSaveSegment = () => {
    const segmentData = {
      segment_name: segmentName,
      schema: selectedSchemas.map(schema => ({ [schema.value]: schema.label })),
    };

    // Send segmentData to the server
    console.log(segmentData);
  };

  return (
    <div className='container'>
        <div className='segment'>
      <button onClick={() => alert("Popup should appear")} id='save'> Click this button for Popup Saving segment</button>
      {/* Your Popup with segment name and schema dropdown */}
      <div id='enter'>
        <label><p>Enter the Name of the Segment</p></label><br></br>
       <br></br>
    {/* -------------------------------------------------- */}
        {/* <input
          type="text" id='box'
          placeholder="Name of the Segment"
          value={segmentName}
          onChange={e => setSegmentName(e.target.value)}
        />
        <p>To save your segment.you need to add the schemas to build the query</p>
        <select className='opt'
          value={newSchema}
          onChange={e => setNewSchema(e.target.value)}>
          
          <option value="" disabled>Add schema to Segment</option>
          {schemaOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))} */}
          {/* --------------------------------------- */}
      <input
          type="text" id='box'
          placeholder="Name of the Segment"
          value={segmentName}
          onChange={e => setSegmentName(e.target.value)}
        />
       {/* --------------------------------------- */}
        <p>To save your segment.you need to add the schemas to build the query</p>
        {/* <select className='opt'
          value={newSchema}
          onChange={e => setNewSchema(e.target.value)}>
          
          <option value="" disabled>Add schema to Segment</option>
          {schemaOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select> */}
        {/* <button onClick={handleAddNewSchema}>+Add new schema</button> */}

         {/* //Blue box with added dropdowns */}

         {/* ------------------------------------------------ */}

        <div className='schema'>
        {/* // style={{ backgroundColor: 'blue', padding: '10px', marginTop: '10px' }}> */}
          {selectedSchemas.map(schema => (
            <select id='sch' key={schema.value} value={schema.value}>
              <option  id='fname'disabled>Select...</option>
              {schemaOptions
                .filter(option => !selectedSchemas.some(selected => selected.value === option.value))
                .map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                   
                ))}
            </select>
           ))} 
           <select className='opt' 
          value={newSchema}
          onChange={e => setNewSchema(e.target.value)}>
          
          <option id='option' value="" disabled>Add schema to Segment</option>
          {schemaOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        
        </select>
        <br></br><br></br>

<button  className='btn1' onClick={handleAddNewSchema}>+Add new schema</button>






























        
        </div>
        <button  className='btn2'onClick={handleSaveSegment}>Save the segment</button>
      
      </div>
    </div>
    </div>
  );
};

export default Labs