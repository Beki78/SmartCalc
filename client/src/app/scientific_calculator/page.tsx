import Options from '@/components/Options'
import { Scientific_Calculator_Options } from '@/libs/data';
import React from 'react'

const page = () => {
  return (
    <div>
      <Options
        title="Scientific Calculator Options"
        options={Scientific_Calculator_Options}
      />
    </div>
  );
}

export default page
