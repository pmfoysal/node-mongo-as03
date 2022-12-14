exports.getUser = async (req, res) => {
   try {
      const result = await Promise();
      res.status(200).send({
         status: 'Success',
         message: 'Performed the action!',
         data: result,
      });
   } catch (error) {
      res.status(400).send({
         status: 'Failed',
         message: 'Something went wrong!',
         error: error?.message,
      });
   }
};

exports.patchUser = async (req, res) => {
   try {
      const result = await Promise();
      res.status(200).send({
         status: 'Success',
         message: 'Performed the action!',
         data: result,
      });
   } catch (error) {
      res.status(400).send({
         status: 'Failed',
         message: 'Something went wrong!',
         error: error?.message,
      });
   }
};

exports.getAdmins = async (req, res) => {
   try {
      const result = await Promise();
      res.status(200).send({
         status: 'Success',
         message: 'Performed the action!',
         data: result,
      });
   } catch (error) {
      res.status(400).send({
         status: 'Failed',
         message: 'Something went wrong!',
         error: error?.message,
      });
   }
};

exports.getManagers = async (req, res) => {
   try {
      const result = await Promise();
      res.status(200).send({
         status: 'Success',
         message: 'Performed the action!',
         data: result,
      });
   } catch (error) {
      res.status(400).send({
         status: 'Failed',
         message: 'Something went wrong!',
         error: error?.message,
      });
   }
};

exports.getCandidates = async (req, res) => {
   try {
      const result = await Promise();
      res.status(200).send({
         status: 'Success',
         message: 'Performed the action!',
         data: result,
      });
   } catch (error) {
      res.status(400).send({
         status: 'Failed',
         message: 'Something went wrong!',
         error: error?.message,
      });
   }
};
