import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import TopicDetails from "../topicDetails";

describe("Topic Details Component", () => {
  it("should render without crash", () => {
    const topic = { name: "vue", stargazerCount: 999 };
    const repoNode = {
      topic: topic,
    };
    const component = shallow(<TopicDetails repoNode={repoNode} />);
    expect(toJSON(component)).toMatchSnapshot();
  });
});
