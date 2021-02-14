import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { GrAdd } from 'react-icons/gr';
import { Modal,Button } from "react-bootstrap";
// import AddTask from '../Task/AddTask'

const Project = ({ project }) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [showTask, setShowTask] = useState(false);

		const handleCloseTask = () => setShowTask(false);
		const handleShowTask = () => setShowTask(true);
	return (
		<div className='card shadow mb-5'>
			<div className='card-body '>
				<h4 className='card-title '>{project.title}</h4>
				<div className='card-main row'>
					<div className='card-description'>
						<p>{project.description}</p>
					</div>
				</div>
			</div>
			<div className='row button text-center'>
				<div className='col-md-6' onClick={handleShowTask}>
					<button
						className='btn col-md-6'
						to={`/project/updateproject/${project._id}`}
					>
						Tasks
					</button>
				</div>
				<Modal show={showTask} onHide={handleCloseTask}>
					<Modal.Header closeButton>
						<Modal.Title>Details About the Tasks</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Link to={`/project/addtask/${project._id}`} className='btn'>
							Add Tasks
						</Link>
						<Link className='btn' to={`/project/getalltasks/${project._id}`}>
							View All tasks
						</Link>
						<Link to={`/project/getspecifictask/${project._id}`} className='btn'>
							View Your Tasks
						</Link>
						<Link to={`/project/getalltasks/${project._id}`} className='btn'>
							Update Tasks
						</Link>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={handleCloseTask}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
				<div className='col-md-6'>
					<button className='btn col-md-6' onClick={handleShow}>
						<span>
							<GrAdd></GrAdd>
						</span>
					</button>
				</div>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Details About the Project</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Link to='/project/addproject' className='btn'>
							Add Project
						</Link>
						<Link className='btn' to={`/project/updateproject/${project._id}`}>
							Update
						</Link>
						<Link to={`/project/${project._id}`} className='btn'>
							View Details
						</Link>
					</Modal.Body>
					<Modal.Footer>
						<Button variant='secondary' onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		</div>
	);
};

export default Project;
