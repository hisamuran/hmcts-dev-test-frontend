import { Application } from 'express';
import axios from 'axios';

export default function (app: Application): void {
  app.get('/retrieve-all-tasks', async (req, res) => {
    try {
      // An second example, rendering another example case from the backend
      const response = await axios.get('http://localhost:4000/retrieve-all-tasks');
      console.log(response.data);
      res.render('retrieve-all-tasks', { "caseList": response.data });
    } catch (error) {
      console.error('Error making request:', error);
      res.render('retrieve-all-tasks', {});
    }
  });
}
