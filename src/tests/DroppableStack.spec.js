
/*
 * These tests use the shallow renderer, which is faster and doesn't require an emulated DOM
 */

const Unexpected = require('unexpected');
const UnexpectedReact = require('unexpected-react');

var React = require('react');
var TestUtils = require('react-addons-test-utils');

const DroppableStack = require('../components/DroppableStack/').default;

const expect = Unexpected.clone()
    .use(UnexpectedReact);

describe('DroppableStack', () => {
    let renderer;

    beforeEach(() => {
        renderer = TestUtils.createRenderer();
        renderer.render(<DroppableStack stackName={'ACE-1'} 
                                        index={1}
                                        handleBeginDragDrop={ function() {} }
                                        getAvailableMoves={ function() {} }
                                        moveCards={ function () {} }
                                        flipCard={ function() {} }
                                        offsetLeft={50}>
                          <div />
                          <div />
                        </DroppableStack>
        );
    });

    it('should be a function', () => {
      expect(DroppableStack, 'to be a', 'function');
    });

    it('should render a ReactElement', () => {
        let result = renderer.getRenderOutput();
        return expect(TestUtils.isElement(result), 'to be ok');
    });
    it('should render with \'left:50\'', () => {
        let result = renderer.getRenderOutput();
        return expect(renderer, 'to have rendered', 
            <div style={ {left: '50px'} }>
              <div />
              <div />
            </div>
        );
    });

    it('should render its children', () => {
        let result = renderer.getRenderOutput();
        return expect(result.props.children, 'to have length', 2);
    });
    it('should have class droppable', () => {
        let result = renderer.getRenderOutput();
        return expect(result.props.className, 'to contain', 'droppable');
    });


});
