import React from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Container

} from 'reactstrap';

class Contact extends React.Component {
    render() {
        return (
            <div >
                <Container>
                    <Form className="contactform">
                        <FormGroup>
                            <Label for="name">FullName</Label>
                            <Input
                                type="text"
                                name="name"
                                id=" name"
                                placeholder="name"
                                className='mb-3'
                            />

                            <Label for="subject">Subject</Label>
                            <Input
                                type="text"
                                //name is same in the state
                                name="subject"
                                id=" subject"
                                placeholder="subject"
                                className='mb-3'
                            />
                            <Label for="message">Message</Label>
                            <Input
                                type="textarea"
                                //name is same in the state
                                name="message"
                                id="message"
                                placeholder="message"
                                className='mb-3'
                            />
                            <Button
                                outline color="success" style={{ marginTop: '2rem' }} block>Send Message</Button>
                        </FormGroup>

                    </Form>
                </Container>
            </div >
        );
    }
}

export default Contact

