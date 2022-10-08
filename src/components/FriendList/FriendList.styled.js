import styled from "styled-components";

export const FriendList = styled.ul`
display:flex;
`;

export const FriendItem = styled.li`
display:flex;
`;
export const FriendImg = styled.img`
border-radius: 50%;
`;
export const FriendName = styled.p`
font-size:16px;
font-weight:400;
`;
export const FriendStatus = styled.span`
width:20px;
height:20px;
border-radius:50%;
background-color: ${props => {
    if (props.status) {
        return "green"
    } else {
        return "red"
    }
} 
      
};
`;