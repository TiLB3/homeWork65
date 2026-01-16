import {
  type ChangeEvent,
  type FormEvent,
  useCallback,
  useEffect,
  useState
} from "react";
import type {Page, PageMutation} from "../../types";
import {useNavigate} from "react-router-dom";
import axiosApi from "../../AxiosApi.ts";
import {toast} from "react-toastify";
import {
  Button,
  Container,
  Grid,
  TextareaAutosize,
  TextField,
  Typography
} from "@mui/material";
import SaveIcon from '@mui/icons-material/Save';


const EditPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const [form, setForm] = useState<PageMutation>({
    title: "",
    content: "",
    pageName: "",
  });

  const editPage = async (Page: Page) => {
    try {
      await axiosApi.put(`/pages/${form.pageName}.json`, Page);
      toast.success("Successfully created a product");
    } catch {
      toast.error("Error creating product");
    }
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.title.trim().length === 0 || form.content.trim().length === 0 || form.pageName.trim().length === 0) {
      toast.error("The form is empty!!!Enter type,title and content and then send");
      return;
    }
    setIsLoading(true);
    await editPage(form);
    setForm({title: '', content: "", pageName: ""});
    setIsLoading(false);

    if (form.pageName === "home") {
      navigate(`/`);
    } else {
      navigate(`/pages/${form.pageName}`);
    }
  }

  const onChangeField = async (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    if (name === "pageName") {
      void fetchPageByName(value);
    }

    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const fetchPageByName = useCallback(async (pageNameId?: string) => {
    try {
      if (pageNameId) {
        setIsLoading(true);
        const {data: response} = await axiosApi.get<Page | null>(`/pages/${pageNameId}.json`);
        if (response) setForm({...response, pageName: pageNameId});
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchPageByName(form.pageName);
  }, [fetchPageByName, form.pageName]);


  return (
    <Container>
      <Typography
        variant="h4"
        component="div"
        sx={{margin: "30px 0", textAlign: "center"}}
      >
        Edit current Page
      </Typography>

      <div>
        <form onSubmit={onSubmit}>
          <Grid
            container
            spacing={2}
            sx={{flexDirection: 'column', alignItems: 'center'}}
          >
            <Grid size={8}>
              <select
                name="pageName"
                value={form.pageName}
                onChange={onChangeField}
                style={{
                  width: "100%",
                  padding: "15px",
                  borderRadius: "4px",
                  borderColor: "gray"
                }}
              >
                <option
                  disabled
                  value=""
                >Select page
                </option>
                <option value="home">Home</option>
                <option value="about">About</option>
                <option value="contacts">Contacts</option>
                <option value="privacy">Privacy</option>
              </select>
            </Grid>
            <Grid size={8}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Enter title"
                variant="outlined"
                name="title"
                value={form.title}
                onChange={onChangeField}

              />
            </Grid>
            <Grid size={8}>
              <TextareaAutosize
                minRows={3}
                placeholder="Enter content"
                style={{
                  boxSizing: 'border-box',
                  width: '100%',
                  fontSize: "20px",
                  borderRadius: "4px",
                  padding: "10px"
                }}
                name="content"
                value={form.content}
                onChange={onChangeField}
              />
            </Grid>
            <Grid size={8}>
              <Button
                loading={isLoading}
                variant="outlined"
                loadingPosition="end"
                startIcon={<SaveIcon />}
                type="submit"
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default EditPage;