import styled from "styled-components";

export const registerContainer = styled.form`
	max-width: 800px;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h3 {
		font-size: 50px;
		font-weight: bold;
		text-align: center;
	}

	input[type="file"], input[type="submit"] {
		display: none;
	}
	label {
        font-size: 24px;
        font-weight: 600;
		padding: 14px 10px;
		border: 2px solid ${({ theme }) => theme.inputBorder};
		border-radius: 5px;
		text-transform: uppercase;
		text-align: center;
		margin: 10px 0;

        &:hover{
            background-color: ${({ theme }) => theme.buttonHover};
        }
	}
`;

export const inputContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	gap: 30px;
	margin: 20px 0;

    input,
	textArea {
		font-size: 16px;
		padding: 14px 10px;
		border: 2px solid ${({ theme }) => theme.inputBorder};
		border-radius: 5px;
	}

    textArea{
        display: inline-block;
    }
`;
