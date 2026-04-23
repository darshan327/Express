  import express from 'express'
  import { allstudent,
     newstudent , updatestudent,
      deletestudent
    } from '../student.js';
    
  const router = express.Router();

  router.get('/all',allstudent);
  router.post('/create', newstudent);
  router.put('/update', updatestudent);
   router.delete('/delete',deletestudent);
     
  export default router;